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
			<div data-role={role} className={`flex items-center justify-center gap-4 mb-6 ${role !== 'tank' && 'mt-6'}`}>
				<Separator className="flex-1" />
				<h2 className="scroll-m-20 text-2xl font-semibold tracking-tight uppercase">{role}</h2>
				<Separator className="flex-1 mr-6" />
			</div>
			<div
				className={`flex w-full h-full justify-center sm:px-4 sm:pl-6 gap-2 gap-y-3 flex-wrap overflow-visible ${role === 'support' ? 'sm:!mb-0 !mb-40' : ''}`}>
				{heroes.map((h) => (
					<SmallHeroCard hero={h} key={`small-img-${h.id}`} />
				))}
			</div>
		</>
	);
}
