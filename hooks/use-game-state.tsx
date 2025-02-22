import { GameStateContext } from '@/context/GameStateContext';
import { PerkContext } from '@/context/PerkContext';
import { getRandomPerk, type Perk, PERKS } from '@/data/perks';
import { useCallback, useContext, useEffect } from 'react';

export default function useGameState() {
	const [currPerk, setCurrPerk] = useContext(PerkContext);
	const [gameState, setGameState] = useContext(GameStateContext);
	const heroPerks: Perk[] = currPerk ? PERKS.filter((p) => p.heroId === currPerk.heroId) : [];

	const rerollPerk = useCallback(() => {
		const newPerk = getRandomPerk();
		setCurrPerk(newPerk);
		setGameState('in-progress');
	}, [setCurrPerk, setGameState]);

	useEffect(() => {
		if (gameState === 'restarting' || currPerk === undefined) {
			rerollPerk();
		}
	}, [gameState, currPerk, rerollPerk]);

	useEffect(() => {
		// Handle hotkeys
		const handleKeyDown = (e: KeyboardEvent) => {
			// reroll on r or space (only trigger if ctrl wasn't pressed so ctrl + r reload still works)
			if ((e.key === 'r' && !(e.metaKey || e.ctrlKey)) || (e.key === ' ' && (e.metaKey || e.ctrlKey))) {
				e.preventDefault();

				// Hotkey action
				rerollPerk();
			}

			if (e.key === 'c' && !(e.metaKey || e.ctrlKey)) {
				e.preventDefault();

				// Hotkey action
				if (gameState !== 'in-progress') {
					rerollPerk();
				}
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [rerollPerk, gameState]);

	return { currPerk, setCurrPerk, rerollPerk, heroPerks, gameState, setGameState };
}
