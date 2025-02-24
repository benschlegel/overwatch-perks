import { addFeedback, logGame } from '@shared-lib/databaseAccess';
import { Elysia,t } from 'elysia';
import { feedbackPostBody, savePostBody } from './types';
import type { DbFeedback } from '@shared/database';
import { CONFIG } from '@shared-global/config';
import cors from '@elysiajs/cors';

// TODO: use different port on local + run concurrent in package.json

const app = new Elysia()
.use(cors())
	.post('/api/save', async ({body, set}) => {
		console.time("save")
		// Handle route
		try {
			// Try to log game, return with success code if so
			const timestamp = new Date();
			const res = await logGame(body, timestamp, CONFIG.version);
			if (res?.acknowledged) {
				set.status = 200;
			}
		} catch (e) {
			set.status = 500;
    	return { message: "Couldn't save game." };
		}
		console.timeEnd("save")
	}, {body: savePostBody})
	.post('/api/feedback', async ({body, set}) => {
		// Handle route
		console.time("feedback")
		try {
			// Try to log game, return with success code if so
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
		console.timeEnd("feedback")
	}, {body: feedbackPostBody})
	.listen(3000);


console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
