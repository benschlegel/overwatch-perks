import { CONFIG } from '@/config';
import { GameScoreContext } from '@/context/GameScoreContext';
import { useCallback, useContext, useEffect, useState } from 'react';

export default function useStreakText() {
	const { bestStreak } = useContext(GameScoreContext);
	const [text, setText] = useState('');

	const updateText = useCallback(() => {
		let partialText = `${CONFIG.gameName}\n`;
		partialText += `My best streak: ${bestStreak}\n`;
		if (bestStreak === 0) {
			partialText += '🟥';
		} else {
			for (let i = 0; i < bestStreak; i++) {
				partialText += '🟩';
			}
		}
		partialText += `\n<${CONFIG.url}>`;
		setText(partialText);
	}, [bestStreak]);

	useEffect(() => {
		if (bestStreak !== -1) {
			updateText();
		}
	}, [updateText, bestStreak]);
	return text;
}
