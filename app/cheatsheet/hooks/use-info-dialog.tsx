import { parseAsStringLiteral, useQueryState } from 'nuqs';

const QUERY_KEY = 'perk';

const DIALOGS = ['none', 'minor_1', 'minor_2', 'major_1', 'major_2'] as const;
export type InfoDialog = (typeof DIALOGS)[number];

export function useInfoDialog() {
	return useQueryState(QUERY_KEY, parseAsStringLiteral(DIALOGS).withDefault('none'));
}
