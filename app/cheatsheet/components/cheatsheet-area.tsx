import CheatsheetHeroCard from '@/app/cheatsheet/components/hero-card';
import { type TabKey, useTabParam } from '@/app/cheatsheet/hooks/use-tab-param';
import { Tabs } from '@/components/ui/tabs';
import type { HeroId } from '@/data/heroes';
import { useCallback } from 'react';

type Props = {
	heroId: HeroId;
};

export default function CheatsheetArea({ heroId }: Props) {
	const [tab, setTab] = useTabParam();

	const handleChange = useCallback(
		(newVal: string) => {
			setTab(newVal as TabKey);
		},
		[setTab]
	);
	return (
		<div className="flex flex-col gap-4">
			<Tabs value={tab} onValueChange={handleChange}>
				<CheatsheetHeroCard heroId={heroId} />
			</Tabs>
		</div>
	);
}
