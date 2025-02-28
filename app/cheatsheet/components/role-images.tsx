import SmallHeroCard from '@/app/cheatsheet/components/small-hero-card';
import { Separator } from '@/components/ui/separator';
import { DAMAGE_HEROES, type HeroRole, SUPPORT_HEROES, TANK_HEROES } from '@/data/heroes';
import { useMemo } from 'react';

type Props = {
	role: HeroRole;
};

export default function RoleImages({ role }: Props) {
	const heroes = useMemo(() => {
		if (role === 'tank') {
			return TANK_HEROES;
		}
		if (role === 'damage') {
			return DAMAGE_HEROES;
		}
		if (role === 'support') {
			return SUPPORT_HEROES;
		}
		return TANK_HEROES;
	}, [role]);
	return (
		<>
			<div className="flex items-center justify-center gap-4 my-5">
				<Separator className="flex-1" />
				<h2 className="scroll-m-20 text-2xl font-semibold tracking-tight uppercase">{role}</h2>
				<Separator className="flex-1 mr-6" />
			</div>
			<div className="flex w-full h-full px-4 pl-6 gap-2 flex-wrap overflow-visible">
				{heroes.map((h) => (
					<SmallHeroCard hero={h} key={`small-img-${h.id}`} />
				))}
			</div>
		</>
	);
}
