import { PERKS } from '@shared-data/perks';
import { type Static, t } from 'elysia';

export const savePostBody = t.Object({
	gameResult: t.Union([t.Literal('won'), t.Literal('lost')]),
	perkId: t.Integer({ minimum: 0, maximum: PERKS.length - 1 }),
	guessedPerk: t.Integer({ minimum: 0, maximum: PERKS.length - 1 }),
	settings: t.Array(t.Boolean()),
});

export type SavePostBody = Static<typeof savePostBody>;

export const feedbackPostBody = t.Object({
	rating: t.Optional(t.Number({ minimum: 0.5, maximum: 5, multipleOf: 0.5 })),
	name: t.Optional(t.String({ maxLength: 128 })),
	feedback: t.String({ maxLength: 4096 }),
});
export type FeedbackPostBody = Static<typeof savePostBody>;

export const saveRunBody = t.Object({
	turns: t.Integer({ minimum: 1 }),
	duration: t.Integer({ minimum: 100, maximum: 7_200_000 }),
	settings: t.Array(t.Boolean()),
});

export type SaveRunBody = Static<typeof saveRunBody>;
