import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function shuffleArray<T>(arr: T[]) {
	const copiedArray = [...arr];
	// Apply Fisher-Yates shuffle
	for (let i = copiedArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
	}

	return copiedArray;
}
