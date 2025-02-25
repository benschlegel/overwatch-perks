import StreakToastAction from '@/components/landing-page/streak-toast-action';
import { CONFIG } from '@/config';
import { CurrentBestContext } from '@/context/CurrentBestContext';
import { useGameScore } from '@/context/GameScoreContext';
import type { Perk } from '@/data/perks';
import useCompactSettings from '@/hooks/use-compact-settings';
import { useDialogParams } from '@/hooks/use-dialog-param';
import useGameState from '@/hooks/use-game-state';
import { useToast } from '@/hooks/use-toast';
import type { GameResult } from '@/types/database';
import type { PlausibleEvents } from '@/types/plausible';
import { usePlausible } from 'next-plausible';
import { useState, useCallback, useEffect, type RefObject, useContext } from 'react';

type Props = {
	cardId: number;
	perk: Perk;
	isCorrect: boolean;
	cardRef: RefObject<HTMLDivElement | null>;
};

const apiRoute = process.env.NEXT_PUBLIC_API_URL ?? '';

export default function useAnswerCard({ cardId, perk, isCorrect, cardRef }: Props) {
	const { gameState, setGameState, currPerk } = useGameState();
	const { incrementCurrent, resetCurrent, currentStreak } = useGameScore();
	const [result, setResult] = useState<boolean | undefined>(undefined);
	const plausible = usePlausible<PlausibleEvents>();
	const [dialog, _] = useDialogParams();
	const settings = useCompactSettings();
	const { isCurrentBest } = useContext(CurrentBestContext);
	const { toast } = useToast();

	// TODO: This is getting out of hand, split into multiple functions
	const onClick = useCallback(async () => {
		if (gameState === 'in-progress' || gameState === 'starting') {
			// Update game/card state
			const gameResult = isCorrect ? 'won' : 'lost';
			cardRef.current?.focus();
			setGameState(gameResult);
			if (!isCorrect) {
				setResult(false);
				resetCurrent();
			} else {
				incrementCurrent();
			}

			// Logging
			plausible('finishGame', { props: { result: isCorrect ? 'correct' : 'incorrect' } });
			const loggedGame: GameResult = {
				gameResult,
				guessedPerk: perk.id,
				perkId: currPerk?.id ?? -1,
				settings,
			};
			if (CONFIG.pauseLogs === false) {
				if (gameResult === 'lost' && currentStreak > 0) {
					if (isCurrentBest) {
						toast({
							title: 'New best streak reached! 🎉',
							description: `You hit a new best streak of ${currentStreak}`,
							duration: 10_000,
							action: <StreakToastAction />,
						});
					}
					const run = {
						settings,
						turns: currentStreak,
					};
					fetch(`${apiRoute}/api/run`, {
						method: 'POST',
						body: JSON.stringify(run),
						headers: {
							'Content-Type': 'application/json',
						},
					}).catch((e) => console.error);
				}
				fetch(`${apiRoute}/api/save`, {
					method: 'POST',
					body: JSON.stringify(loggedGame),
					headers: {
						'Content-Type': 'application/json',
					},
				}).catch((e) => console.error);
			}
		}
	}, [
		isCorrect,
		setGameState,
		gameState,
		incrementCurrent,
		resetCurrent,
		plausible,
		currPerk?.id,
		perk.id,
		settings,
		cardRef.current,
		currentStreak,
		isCurrentBest,
		toast,
	]);

	const updateCorrectCard = useCallback(() => {
		if (isCorrect) {
			setResult(true);
		}
	}, [isCorrect]);

	const resetResult = useCallback(() => {
		setResult(undefined);
		cardRef.current?.blur();
	}, [cardRef.current]);

	useEffect(() => {
		if (gameState === 'won' || gameState === 'lost') {
			updateCorrectCard();
		} else if (gameState === 'starting' || gameState === 'in-progress') {
			resetResult();
		}
	}, [gameState, updateCorrectCard, resetResult]);

	useEffect(() => {
		// Handle hotkeys
		const handleKeyDown = (e: KeyboardEvent) => {
			// reroll on r or space (only trigger if ctrl wasn't pressed so ctrl + r reload still works)
			if (e.key === `${cardId}` && dialog === 'none') {
				e.preventDefault();

				// Hotkey action
				// Trigger click action if corresponding hotkey was pressed
				onClick();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [onClick, cardId, dialog]);

	return { result, onClick };
}
