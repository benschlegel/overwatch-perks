import PerkCardCommunity from '@/app/cheatsheet/components/perk-card-community';
import { Separator } from '@/components/ui/separator';
import type { HeroId } from '@/data/heroes';
import { getHeroPerks } from '@/data/perks';
import { useMemo } from 'react';

type Props = {
	heroId: HeroId;
};

export default function CommunityCardWrapper({ heroId }: Props) {
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
				<PerkCardCommunity perk={perks[0]} heroId={heroId} />
				<PerkCardCommunity perk={perks[1]} heroId={heroId} />
			</div>
			<div className="flex items-center my-2">
				<Separator className="flex-1 mx-5" />
				<p className="text-muted-foreground">Major perks</p>
				<Separator className="flex-1 mx-5" />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 px-2 sm:px-0 gap-y-4 sm:gap-x-3">
				<PerkCardCommunity perk={perks[2]} heroId={heroId} />
				<PerkCardCommunity perk={perks[3]} heroId={heroId} />
			</div>
		</div>
	);
}
