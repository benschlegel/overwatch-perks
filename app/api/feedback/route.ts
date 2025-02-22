import { CONFIG } from '@/config';
import { addFeedback } from '@/lib/databaseAccess';
import { type DbFeedback, feedbackSchema } from '@/types/database';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
	// Try to parse request
	const parsedBody = await request.json();
	const parsedFeedback = feedbackSchema.safeParse(parsedBody);

	// Error handling
	if (!parsedFeedback.success) {
		const errMessage = parsedFeedback.error.errors.map((err) => `${err.path}: ${err.message},`);
		return new Response(`Invalid input. Errors: {\n${errMessage.join('\n')}\n}`, { status: 400 });
	}

	try {
		// Try to log game, return with success code if so
		const timestamp = new Date();
		const feedback: DbFeedback = { ...parsedFeedback.data, timestamp: timestamp, gameVersion: CONFIG.version };
		const res = await addFeedback(feedback);
		if (res?.acknowledged) {
			return new Response(undefined, { status: 200 });
		}
	} catch (e) {
		return new Response(JSON.stringify({ message: "Couldn't add feedback." }), { status: 500 });
	}
}
