import { logGame } from '@/lib/databaseAccess';
import { gameSaveValidator } from '@/types/database';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
	// Try to parse request
	const parsedBody = await request.json();
	const gameSaveRes = gameSaveValidator.safeParse(parsedBody);

	// Error handling
	if (!gameSaveRes.success) {
		const errMessage = gameSaveRes.error.errors.map((err) => `${err.path}: ${err.message},`);
		return new Response(`Invalid input. Errors: {\n${errMessage.join('\n')}\n}`, { status: 400 });
	}

	const reqData = gameSaveRes.data;

	try {
		// Try to log game, return with success code if so
		const timestamp = new Date();
		const res = await logGame(reqData, timestamp);
		if (res?.acknowledged) {
			return new Response(undefined, { status: 200 });
		}
	} catch (e) {
		return new Response(JSON.stringify({ message: "Couldn't save game." }), { status: 500 });
	}
}
