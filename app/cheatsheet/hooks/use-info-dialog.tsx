import { parseAsStringLiteral, useQueryState } from 'nuqs';

const QUERY_KEY = 'perk';

const DIALOGS = ['none', 'minor-1', 'minor-2', 'major-1', 'major-2'] as const;
export type InfoDialogKey = (typeof DIALOGS)[number];

const DEFAULT_VALUE: InfoDialogKey = 'none';

export function useInfoDialogs() {
	return useQueryState(QUERY_KEY, parseAsStringLiteral(DIALOGS).withDefault(DEFAULT_VALUE));
}

export function useInfoDialog(dialogKey: InfoDialogKey) {
	// Get query param state
	const [dialog, setDialog] = useInfoDialogs();

	// Derive boolean setter/getter from dialog string literal state
	const setOpen = (value: boolean) => {
		if (value === true) {
			setDialog(dialogKey);
		} else {
			setDialog(DEFAULT_VALUE);
		}
	};
	const open = dialog === dialogKey;

	return { open, setOpen } as const;
}
