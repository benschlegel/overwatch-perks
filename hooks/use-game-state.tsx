import { GameStateContext } from '@/context/GameStateContext';
import { generateBacklog, PerkContext, usePerks } from '@/context/PerkContext';
import { getRandomPerk, type Perk, PERKS } from '@/data/perks';
import { useDialogParams } from '@/hooks/use-dialog-param';
import { useSetting } from '@/hooks/use-settings-param';
import { shuffleArray } from '@/lib/utils';
import { useCallback, useContext, useEffect } from 'react';

export default function useGameState() {
	// const [currPerk, setCurrPerk] = useContext(PerkContext);
	const { currentPerk: currPerk, goNextPerk, regenBacklog } = usePerks();
	const [gameState, setGameState] = useContext(GameStateContext);
	const heroPerks: Perk[] = currPerk ? PERKS.filter((p) => p.heroId === currPerk.heroId) : [];
	const randomPerksRaw = generateBacklog(3);
	const [hardMode, _set] = useSetting('hardMode');
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const randomPerks = shuffleArray([...randomPerksRaw, currPerk!]);

	const [dialog, _] = useDialogParams();

	const rerollPerk = useCallback(() => {
		goNextPerk();
		setGameState('in-progress');
	}, [goNextPerk, setGameState]);

	const restartGame = useCallback(() => {
		regenBacklog();
		setGameState('starting');
	}, [setGameState, regenBacklog]);

	useEffect(() => {
		// Handle hotkeys
		const handleKeyDown = (e: KeyboardEvent) => {
			// TODO: refactor
			// reroll on r or space (only trigger if ctrl wasn't pressed so ctrl + r reload still works)
			if (dialog === 'none') {
				if (hardMode === false) {
					if ((e.key === 'r' && !(e.metaKey || e.ctrlKey)) || (e.key === ' ' && (e.metaKey || e.ctrlKey))) {
						e.preventDefault();

						// Hotkey action
						restartGame();
					}

					if (e.key === 'c' && !(e.metaKey || e.ctrlKey)) {
						e.preventDefault();

						// Hotkey action
						if (gameState === 'won' || gameState === 'lost') {
							rerollPerk();
						}
					}
				} else if (hardMode === true) {
					if (e.key === 'x' && e.altKey) {
						e.preventDefault();

						// Hotkey action
						restartGame();
					}
					if (e.key === 'c' && !(e.metaKey || e.ctrlKey) && e.altKey) {
						e.preventDefault();
						console.log('pressed.');

						// Hotkey action
						if (gameState === 'won' || gameState === 'lost') {
							rerollPerk();
						}
					}
				}
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [rerollPerk, restartGame, gameState, dialog, hardMode]);

	return { currPerk, goNextPerk, rerollPerk, heroPerks, gameState, setGameState, restartGame, randomPerks };
}
