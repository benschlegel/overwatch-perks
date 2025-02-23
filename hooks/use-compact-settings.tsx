'use client';

import { useSetting } from '@/hooks/use-settings-param';

export default function useCompactSettings() {
	const [showHero, _show] = useSetting('showHero');
	const [randomAnswers, _rand] = useSetting('randomAnswers');
	const [hardMode, _hard] = useSetting('hardMode');
	return [showHero, randomAnswers, hardMode];
}
