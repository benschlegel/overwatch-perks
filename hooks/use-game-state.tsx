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

	return { currPerk, setCurrPerk, rerollPerk };
}
