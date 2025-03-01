import { parseAsStringLiteral, useQueryState } from 'nuqs';

const QUERY_KEY = 'tab';

const TABS = ['info', 'community', 'personal'] as const;
export type TabKey = (typeof TABS)[number];

export function useTabParam() {
	return useQueryState(QUERY_KEY, parseAsStringLiteral(TABS).withDefault('info'));
}
