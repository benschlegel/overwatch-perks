import { PERKS, type Perk } from '@/data/perks';
import { z } from 'zod';

export type DbLoggedGame = {
	/**
	 * Result of this game (won or lost)
	 */
	gameResult: GameResult;
	/**
	 * Timestamp of when the game was finished
	 */
	finishedAt: Date;
};

export const gameSaveValidator = z.object({
	gameResult: z.enum(['won', 'lost']),
	perkId: z
		.number()
		.min(0)
		.max(PERKS.length - 1),
	guessedPerk: z
		.number()
		.min(0)
		.max(PERKS.length - 1),
});

export type GameResult = z.infer<typeof gameSaveValidator>;
