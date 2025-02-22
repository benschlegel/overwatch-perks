export type PlausibleEvents = {
	finishGame: { result: GameResult };
	openSocials: never;
	followSocial: { social: string };
};

type GameResult = 'correct' | 'incorrect';
