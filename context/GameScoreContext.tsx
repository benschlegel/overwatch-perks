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

export const LOCAL_STORAGE_SCORE_KEY = 'score';
export const LOCAL_STORAGE_BEST_SCORE_KEY = 'highScore';

// TODO: make context manage and expose hook

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
			localStorage.setItem(LOCAL_STORAGE_BEST_SCORE_KEY, JSON.stringify(newStreak));
		}
	}, [currentStreak, bestStreak, setBestStreak, setCurrentStreak]);

	const resetCurrent = useCallback(() => {
		setCurrentStreak(0);
	}, [setCurrentStreak]);

	const readLocalStorageScore = useCallback(() => {
		if (typeof window !== 'undefined') {
			const storageHighScore = localStorage.getItem(LOCAL_STORAGE_BEST_SCORE_KEY);
			const parsedScore = storageHighScore !== null ? Number(storageHighScore) : undefined;

			if (parsedScore !== undefined && parsedScore > 0) {
				setBestStreak(parsedScore);
			}
		}
	}, [setBestStreak]);

	useEffect(() => {
		readLocalStorageScore();
	}, [readLocalStorageScore]);

	useEffect(() => {
		if (gameState === 'starting') {
			setCurrentStreak(0);
		}
	}, [gameState, setCurrentStreak]);

	return { bestStreak, currentStreak, incrementCurrent, resetCurrent };
}
