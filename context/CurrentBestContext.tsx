'use client';
import { createContext, type Dispatch, type SetStateAction, useState, type PropsWithChildren } from 'react';

type CurrentBestContextType = { isCurrentBest: boolean; setIsCurrentBest: Dispatch<SetStateAction<boolean>> };

export const CurrentBestContext = createContext({ currentBest: false, setCurrentBest: () => {} } as unknown as CurrentBestContextType);

export default function CurrentBestContextProvider({ children }: PropsWithChildren) {
	const [currentBest, setCurrentBest] = useState<boolean>(false);
	return <CurrentBestContext.Provider value={{ isCurrentBest: currentBest, setIsCurrentBest: setCurrentBest }}>{children}</CurrentBestContext.Provider>;
}
