'use client';

import { CHEATSHEET_SETTINGS, type CheatsheetSettingName } from '@/app/cheatsheet/components/settings-content';
import { parseAsBoolean, useQueryState } from 'nuqs';

export function useCheatsheetSetting(setting: CheatsheetSettingName) {
	// Get default setting for given key
	const defaultSetting = CHEATSHEET_SETTINGS.find((s) => s.settingId === setting)?.defaultChecked ?? false;

	// Use boolean query state
	return useQueryState(setting, parseAsBoolean.withDefault(defaultSetting).withOptions({ history: 'push', clearOnDefault: true }));
}
