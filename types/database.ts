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
	gameVersion: string;
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
	settings: z.array(z.boolean()),
});

export type GameResult = z.infer<typeof gameSaveValidator>;

export const feedbackSchema = z.object({
	rating: z.number().min(0.5).max(5).step(0.5).optional(),
	name: z.string().trim().max(128).optional(),
	feedback: z.string().trim().max(4096),
});

export type Feedback = z.infer<typeof feedbackSchema>;
export type DbFeedback = Feedback & { timestamp: Date; gameVersion: string };

export type DbTest = { prop: string };
