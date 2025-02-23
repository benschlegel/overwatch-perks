'use client';

import { CONFIG } from '@/config';
import { PERKS, type Perk } from '@/data/perks';
import { createContext, type Dispatch, type SetStateAction, useState, type PropsWithChildren, useContext, useCallback, useEffect } from 'react';
type PerkContextType = [Perk[], Dispatch<SetStateAction<Perk[]>>];

export const PerkContext = createContext<PerkContextType>([[], () => {}] as unknown as PerkContextType);

export default function PerkContextProvider({ children }: PropsWithChildren) {
	const currentPerk = useState<Perk[]>([]);
	return <PerkContext.Provider value={currentPerk}>{children}</PerkContext.Provider>;
}

export function usePerks() {
	const [perks, setPerks] = useContext(PerkContext);
	const [currentPerk, setCurrPerk] = useState<Perk>();

	useEffect(() => {
		if (perks.length > 0) {
			setCurrPerk(perks[0]);
		} else {
			appendBacklog();
		}
	}, [perks]);

	const goNextPerk = useCallback(() => {
		setPerks((prev) => {
			let newPerks = prev;
			if (prev.length < CONFIG.pregenThreshold) {
				const newItems = generateBacklog(CONFIG.backlogSize);
				newPerks = [...prev, ...newItems];
			}
			// setCurrPerk(newPerks[0])
			return newPerks.slice(1);
		});
	}, [setPerks]);

	const appendBacklog = useCallback(() => {
		const newItems = generateBacklog(CONFIG.backlogSize);
		setPerks((prev) => [...prev, ...newItems]);
	}, [setPerks]);

	return { currentPerk, goNextPerk };
}

/**
 * Generate a new perk backlog.
 * @param amount How many items the backlog should contain
 * @returns backlog containing random unqiue perks
 */
export function generateBacklog(amount: number) {
	const backlogSize = amount > PERKS.length - 1 ? PERKS.length - 1 : amount;
	const perkCopy = [...PERKS];

	// Apply Fisher-Yates shuffle
	for (let i = perkCopy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[perkCopy[i], perkCopy[j]] = [perkCopy[j], perkCopy[i]];
	}

	// Pick specified amount
	const newPerks = perkCopy.slice(0, backlogSize);
	return newPerks;
}
