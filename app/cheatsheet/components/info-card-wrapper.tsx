import PerkCardBase from '@/app/cheatsheet/components/perk-card';
import { Separator } from '@/components/ui/separator';
import type { HeroId } from '@/data/heroes';
import { getHeroPerks } from '@/data/perks';
import { useMemo } from 'react';

type Props = {
	heroId: HeroId;
};

export default function InfoCardWrapper({ heroId }: Props) {
	const perks = useMemo(() => {
		return getHeroPerks(heroId);
	}, [heroId]);
	if (!perks) return <></>;
	return (
		<div className="flex flex-col w-full sm:gap-3 gap-2 sm:mt-2 mt-1">
			<div className="flex items-center my-2">
				<Separator className="flex-1 mx-5" />
				<p className="text-muted-foreground">Minor perks</p>
				<Separator className="flex-1 mx-5" />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 px-2 sm:px-0 gap-y-4 sm:gap-x-3">
				<PerkCardBase perk={perks[0]} />
				<PerkCardBase perk={perks[1]} />
			</div>
			<div className="flex items-center my-2">
				<Separator className="flex-1 mx-5" />
				<p className="text-muted-foreground">Major perks</p>
				<Separator className="flex-1 mx-5" />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 px-2 sm:px-0 gap-y-4 sm:gap-x-3">
				<PerkCardBase perk={perks[2]} />
				<PerkCardBase perk={perks[3]} />
			</div>
		</div>
	);
}
