export type PlausibleEvents = {
	// TODO: add events for guesses
	openSocials: never;
	followSocial: { social: string };
};

type GameResult = 'correct' | 'incorrect';
