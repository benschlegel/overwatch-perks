import { CONFIG } from '@/config';
import type { HeroId } from '@/data/heroes';
import { getHeroPerkIds } from '@/data/perks';
import type { GameResult, DbLoggedGame, DbFeedback, DbRun, DbVote } from '@/types/database';
import { MongoClient } from 'mongodb';
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

const runId = 'runs';
const runCollection = database.collection<DbRun>(runId);

const voteId = 'votes';
const voteCollection = database.collection<DbVote>(voteId);

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

export async function logRun(run: DbRun) {
	return runCollection.insertOne(run);
}

export async function deleteLogs(version: string) {
	return gameLogCollection.deleteMany({ gameVersion: version });
}

export async function getTotalTurns() {
	return gameLogCollection.countDocuments();
}

export async function getTotalRuns() {
	return runCollection.countDocuments();
}

export async function estimateTotalTurns() {
	return gameLogCollection.estimatedDocumentCount();
}

/**
 * Add website feedback to db
 */
export async function addFeedback(feedback: DbFeedback) {
	return feedbackCollection.insertOne(feedback);
}

export async function incrementVote(perkId: number) {
	return voteCollection.updateOne(
		{ _id: perkId }, // Filter by id
		{ $inc: { votes: 1 } }, // Increment votes by 1
		{ upsert: true } // Create document if it does not exist
	);
}

export async function getVotesByHero(heroId: HeroId) {
	const perkIds = getHeroPerkIds(heroId);
}

export async function getTotalVotes() {
	const result = await voteCollection
		.aggregate([
			{
				$group: { _id: null, totalVotes: { $sum: '$votes' } },
			},
		])
		.toArray();

	return result.length > 0 ? result[0].totalVotes : 0;
}

// const result = await collection.aggregate([{
// 	$group: { _id: null, totalVotes: { $sum: "$votes" } }
// }]).toArray();

// return result.length > 0 ? result[0].totalVotes : 0;

// {
//   id: "bass-blowout",
//   votes: 25
// }
