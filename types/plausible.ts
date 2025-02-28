export type PlausibleEvents = {
	finishGame: { result: GameResult };
	copyResults: { type: CopyType };
	copyUrl: { type: ShareType };
	openSocials: never;
	followSocial: { social: string };
};

type GameResult = 'correct' | 'incorrect';
type ShareType = 'footer-button';
type CopyType = 'footer-button' | 'toast-button';
