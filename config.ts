export type Config = {
	gameName: string;
	url: string;
	isDebug: boolean;
	version: string;
	/**
	 * Wether to pause logging results to db
	 */
	pauseLogs: boolean;
	/**
	 * How many perks to generate
	 */
	backlogSize: number;
	/**
	 * How many perk images to preload (e.g. 3 means next 3 perk images will be preloaded)
	 */
	preloadAmount: number;
	/**
	 * How many items remain in backlog until new ones get appended (e.g. 5 => append new backlog if only 5 elements remain)
	 */
	pregenThreshold: number;
};

export const CONFIG: Config = {
	gameName: 'Guess the Perk (Overwatch)',
	url: 'https://perks.owldle.com',
	isDebug: false,
	version: 'v0.4',
	backlogSize: 167,
	preloadAmount: 4,
	pregenThreshold: 15,
	pauseLogs: false,
};
