import CheatsheetHeroCardWrapper from '@/app/cheatsheet/components/hero-card';
import InfoCardWrapper from '@/app/cheatsheet/components/info-card-wrapper';
import { type TabKey, useTabParam } from '@/app/cheatsheet/hooks/use-tab-param';
import { Tabs, TabsContent } from '@/components/ui/tabs';
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
				<CheatsheetHeroCardWrapper heroId={heroId} />
				<TabsContent value={'info' as TabKey}>
					<InfoCardWrapper heroId={heroId} />
				</TabsContent>
			</Tabs>
		</div>
	);
}
