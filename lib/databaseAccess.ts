import type { GameResult, DbLoggedGame, DbFeedback } from '@/types/database';
import { type ClientSession, MongoClient } from 'mongodb';
let useDevDatabase = false;
if (process.env.NODE_ENV !== 'production') {
	useDevDatabase = true;
}

const uri = process.env.MONGO_URI;
if (!uri) {
	throw new Error('MONGO_URI not found! Make sure to set MONGO_URI in your .env');
}

// Define db constants (collection names, etc)
const PROD_NAME = 'OwPerks';
const DEV_NAME = 'OwPerks-dev';
export const dbName = !useDevDatabase ? PROD_NAME : DEV_NAME;
const gameLogs = 'game_logs';

const dbClient = new MongoClient(uri);
const database = dbClient.db(dbName);

/**
 *
 * Collections
 *
 */

const gameLogCollection = database.collection<DbLoggedGame>(gameLogs);
const feedbackID = 'feedback';
const feedbackCollection = database.collection<DbFeedback>(feedbackID);

/**
 *
 *
 *
 *
 * Database functions
 *
 *
 *
 */

/**
 * Log game to database (result, perkid, etc)
 */
export async function logGame(gameResult: GameResult, timestamp: Date, version: string) {
	return gameLogCollection.insertOne({ finishedAt: timestamp, gameResult, gameVersion: version });
}

export async function deleteLogs(version: string) {
	return gameLogCollection.deleteMany({ gameVersion: version });
}

/**
 * Add website feedback to db
 */
export async function addFeedback(feedback: DbFeedback) {
	return feedbackCollection.insertOne(feedback);
}
