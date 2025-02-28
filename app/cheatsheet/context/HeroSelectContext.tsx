'use client';
import { createContext, type Dispatch, type SetStateAction, useState, type PropsWithChildren } from 'react';

type HeroSelectType = { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> };

export const HeroSelectContext = createContext({ isOpen: true, setCurrentBest: () => {} } as unknown as HeroSelectType);

export default function HeroSelectContextProvider({ children }: PropsWithChildren) {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	return <HeroSelectContext.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>{children}</HeroSelectContext.Provider>;
}
