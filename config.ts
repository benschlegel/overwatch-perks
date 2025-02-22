export type Config = {
	gameName: string;
	url: string;
	isDebug: boolean;
	version: string;
};

export const CONFIG: Config = {
	gameName: 'Guess the Perk (Overwatch)',
	url: 'https://perks.owldle.com',
	isDebug: false,
	version: 'v0.0',
};
