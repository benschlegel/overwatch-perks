import { PerkContext } from '@/context/PerkContext';
import { getRandomPerk } from '@/data/perks';
import { useCallback, useContext, useEffect } from 'react';

export default function useGameState() {
	const [currPerk, setCurrPerk] = useContext(PerkContext);

	const rerollPerk = useCallback(() => {
		const newPerk = getRandomPerk();
		setCurrPerk(newPerk);
	}, [setCurrPerk]);

	useEffect(() => {
		if (currPerk === undefined) {
			rerollPerk();
		}
	}, [currPerk, rerollPerk]);

	useEffect(() => {
		// Handle hotkeys
		const handleKeyDown = (e: KeyboardEvent) => {
			// reroll on r or space (only trigger if ctrl wasn't pressed so ctrl + r reload still works)
			if ((e.key === 'r' && !(e.metaKey || e.ctrlKey)) || e.key === ' ') {
				e.preventDefault();

				// Hotkey action
				rerollPerk();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [rerollPerk]);

	return { currPerk, setCurrPerk, rerollPerk };
}
