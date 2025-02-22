import { GameStateContext } from '@/context/GameStateContext';
import { PerkContext } from '@/context/PerkContext';
import { getRandomPerk, type Perk, PERKS } from '@/data/perks';
import { useDialogParams } from '@/hooks/use-dialog-param';
import { useCallback, useContext, useEffect } from 'react';

export default function useGameState() {
	const [currPerk, setCurrPerk] = useContext(PerkContext);
	const [gameState, setGameState] = useContext(GameStateContext);
	const heroPerks: Perk[] = currPerk ? PERKS.filter((p) => p.heroId === currPerk.heroId) : [];
	const [dialog, _] = useDialogParams();

	const rerollPerk = useCallback(() => {
		const newPerk = getRandomPerk();
		setCurrPerk(newPerk);
		setGameState('in-progress');
	}, [setCurrPerk, setGameState]);

	const restartGame = useCallback(() => {
		setGameState('starting');
	}, [setGameState]);

	useEffect(() => {
		if (gameState === 'starting' || currPerk === undefined) {
			rerollPerk();
		}
	}, [gameState, currPerk, rerollPerk]);

	useEffect(() => {
		// Handle hotkeys
		const handleKeyDown = (e: KeyboardEvent) => {
			// reroll on r or space (only trigger if ctrl wasn't pressed so ctrl + r reload still works)
			if (dialog === 'none') {
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
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [rerollPerk, restartGame, gameState, dialog]);

	return { currPerk, setCurrPerk, rerollPerk, heroPerks, gameState, setGameState, restartGame };
}
