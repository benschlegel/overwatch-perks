'use client';

import type { Perk } from '@/data/perks';
import { createContext, type Dispatch, type SetStateAction, useState, type PropsWithChildren } from 'react';
type PerkContextType = [Perk, Dispatch<SetStateAction<Perk>>];

export const PerkContext = createContext<PerkContextType>([undefined, () => {}] as unknown as PerkContextType);

export default function PerkContextProvider({ children }: PropsWithChildren) {
	// biome-ignore lint/style/noNonNullAssertion: context is never undefined
	const currentPerk = useState<Perk>(undefined!);
	return <PerkContext.Provider value={currentPerk}>{children}</PerkContext.Provider>;
}
