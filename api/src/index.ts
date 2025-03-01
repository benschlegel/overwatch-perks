import { addFeedback, getTotalRuns, getTotalTurns, getTotalVotes, getVotes, getVotesByHero, incrementVote, logGame, logRun } from '@shared-lib/databaseAccess';
import { Elysia } from 'elysia';
import { feedbackPostBody, heroIdBody, savePostBody, saveRunBody, votePostBody } from './types';
import type { DbFeedback } from '@shared/database';
import { CONFIG } from '@shared-global/config';
import cors from '@elysiajs/cors';

// TODO: use different port on local + run concurrent in package.json
// TODO: refactor after v2 merge

const app = new Elysia()
	.use(cors())
	.post(
		'/api/save',
		async ({ body, set }) => {
			// Handle route
			try {
				const timestamp = new Date();
				const res = await logGame(body, timestamp, CONFIG.version);
				if (res?.acknowledged) {
					set.status = 200;
				}
			} catch (e) {
				set.status = 500;
				return { message: "Couldn't save turn." };
			}
		},
		{ body: savePostBody }
	)
	.post(
		'/api/run',
		async ({ body, set }) => {
			// Handle route
			try {
				const timestamp = new Date();
				const res = await logRun({ ...body, timestamp, gameVersion: CONFIG.version });
				if (res?.acknowledged) {
					set.status = 200;
				}
			} catch (e) {
				set.status = 500;
				return { message: "Couldn't save run." };
			}
		},
		{ body: saveRunBody }
	)
	.post(
		'/api/feedback',
		async ({ body, set }) => {
			// Handle route
			try {
				const timestamp = new Date();
				const feedback: DbFeedback = { ...body, timestamp: timestamp, gameVersion: CONFIG.version };
				const res = await addFeedback(feedback);
				if (res?.acknowledged) {
					set.status = 200;
				}
			} catch (e) {
				set.status = 500;
				return { message: "Couldn't save game." };
			}
		},
		{ body: feedbackPostBody }
	)
	.post(
		'/api/vote/:perkId',
		async ({ params, set }) => {
			try {
				const res = await incrementVote(params.perkId);
				if (res?.acknowledged) {
					set.status = 200;
				}
			} catch (e) {
				set.status = 500;
				return { message: "Couldn't cast vote." };
			}
		},
		{ params: votePostBody }
	)
	.get(
		'/api/votes/perk/:perkId',
		async ({ params, set }) => {
			const votes = await getVotes(params.perkId);
			return votes;
		},
		{ params: votePostBody }
	)
	.get(
		'/api/votes/:heroId',
		async ({ params, set }) => {
			const votes = await getVotesByHero(params.heroId);
			return votes;
		},
		{ params: heroIdBody }
	)
	.get('/api/totalTurns', async () => {
		const turns = await getTotalTurns();
		const formatted = turns.toLocaleString('en-US');
		return { totalTurns: turns, formattedTotalTurns: formatted };
	})
	.get('/api/run', async () => {
		const turns = await getTotalRuns();
		const formatted = turns.toLocaleString('en-US');
		return { totalRuns: turns, formattedTotalRuns: formatted };
	})
	.get('/api/votes', async () => {
		const votes = await getTotalVotes();
		const formatted = votes.toLocaleString('en-US');
		return { totalVotes: votes, formattedTotalVotes: formatted };
	})
	.listen(process.env.API_PORT ?? 3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
