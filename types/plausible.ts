export type PlausibleEvents = {
	finishGame: { result: GameResult };
	copyResults: { type: CopyType };
	openSocials: never;
	followSocial: { social: string };
};

type GameResult = 'correct' | 'incorrect';
type CopyType = 'footer-button' | 'toast-button';
