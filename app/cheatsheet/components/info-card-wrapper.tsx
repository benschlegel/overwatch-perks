import PerkCardBase from '@/app/cheatsheet/components/perk-card';
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
			<div className="flex flex-row sm:gap-3 gap-2">
				<PerkCardBase perk={perks[0]} />
				<PerkCardBase perk={perks[1]} />
			</div>
			<div className="flex flex-row sm:gap-3 gap-2">
				<PerkCardBase perk={perks[2]} />
				<PerkCardBase perk={perks[3]} />
			</div>
		</div>
	);
}
