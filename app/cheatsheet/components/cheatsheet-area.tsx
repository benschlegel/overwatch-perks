import CommunityCardWrapper from '@/app/cheatsheet/components/community-card-wrapper';
import ControlsRow from '@/app/cheatsheet/components/controls-row';
import CheatsheetHeroCardWrapper from '@/app/cheatsheet/components/hero-card';
import InfoCardWrapper from '@/app/cheatsheet/components/info-card-wrapper';
import { InfoDialog } from '@/app/cheatsheet/dialogs/info-dialog';
import { type TabKey, useTabParam } from '@/app/cheatsheet/hooks/use-tab-param';
import { Separator } from '@/components/ui/separator';
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
			{/* <blockquote className="w-full italic text-sm tracking-wide opacity-90 border-l-[3px] pl-4 mt-1 text-muted-foreground">
				Click on a perk for more info.
			</blockquote> */}
			<Tabs value={tab} onValueChange={handleChange}>
				<CheatsheetHeroCardWrapper heroId={heroId} />
				<TabsContent value={'info' as TabKey}>
					<InfoCardWrapper heroId={heroId} />
				</TabsContent>
				<TabsContent value={'community' as TabKey}>
					<CommunityCardWrapper heroId={heroId} />
				</TabsContent>
				<TabsContent value={'personal' as TabKey}>
					<InfoCardWrapper heroId={heroId} />
				</TabsContent>
			</Tabs>
			<div>
				<Separator className="mt-3" />
			</div>
			<ControlsRow />
			<InfoDialog heroId={heroId} />
		</div>
	);
}
