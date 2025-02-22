import type { Perk } from '@/data/perks';

export type DbGameResult = {
	result: 'won' | 'lost';
	perkId: Perk['id'];
	guessedPerk?: Perk['id'];
};

export type DbLoggedGame = {
	/**
	 * Result of this game (won or lost)
	 */
	gameResult: DbGameResult;
	/**
	 * Timestamp of when the game was finished
	 */
	finishedAt: Date;
};
