'use client';

import { SETTINGS, type SettingName } from '@/components/dialogs/setting-dialog-content';
import { parseAsBoolean, useQueryState } from 'nuqs';

export function useSetting(setting: SettingName) {
	// Get default setting for given key
	const defaultSetting = SETTINGS.find((s) => s.settingId === setting)?.defaultChecked ?? false;

	// Use boolean query state
	return useQueryState(setting, parseAsBoolean.withDefault(defaultSetting).withOptions({ history: 'push', clearOnDefault: true }));
}
