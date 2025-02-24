import { addFeedback, addTest, logGame } from '@shared-lib/databaseAccess';
import { Elysia,t } from 'elysia';
import { feedbackPostBody, savePostBody } from './types';
import type { DbFeedback, DbTest } from '@shared/database';
import { CONFIG } from '@shared-global/config';

// TODO: use different port on local + run concurrent in package.json

const app = new Elysia()
	.post('/api/save', async ({body, set}) => {
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
	}, {body: savePostBody})
	.post('/api/feedback', async ({body, set}) => {
				// Handle route
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
	}, {body: feedbackPostBody})
	.listen(3000);


console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
