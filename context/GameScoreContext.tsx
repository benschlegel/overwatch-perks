'use client';
import { GameStateContext } from '@/context/GameStateContext';
import { createContext, type Dispatch, type SetStateAction, useState, type PropsWithChildren, useCallback, useContext, useEffect } from 'react';

export type GameScore = {
	currentStreak: number;
	bestStreak: number;
	setCurrentStreak: Dispatch<SetStateAction<number>>;
	setBestStreak: Dispatch<SetStateAction<number>>;
};

const defaultScore: GameScore = { currentStreak: 0, bestStreak: 0, setCurrentStreak: () => {}, setBestStreak: () => {} };

export const GameScoreContext = createContext<GameScore>(defaultScore);

export default function GameScoreContextProvider({ children }: PropsWithChildren) {
	const [currentStreak, setCurrentStreak] = useState<number>(0);
	const [bestStreak, setBestStreak] = useState<number>(0);

	return <GameScoreContext.Provider value={{ currentStreak, bestStreak, setCurrentStreak, setBestStreak }}>{children}</GameScoreContext.Provider>;
}

export function useGameScore() {
	const { bestStreak, currentStreak, setBestStreak, setCurrentStreak } = useContext(GameScoreContext);
	const [gameState, _] = useContext(GameStateContext);

	const incrementCurrent = useCallback(() => {
		const newStreak = currentStreak + 1;
		setCurrentStreak(newStreak);
		if (newStreak > bestStreak) {
			setBestStreak(newStreak);
		}
	}, [currentStreak, bestStreak, setBestStreak, setCurrentStreak]);

	const resetCurrent = useCallback(() => {
		setCurrentStreak(0);
	}, [setCurrentStreak]);

	useEffect(() => {
		if (gameState === 'starting') {
			setCurrentStreak(0);
		}
	}, [gameState, setCurrentStreak]);

	return { bestStreak, currentStreak, incrementCurrent, resetCurrent };
}
