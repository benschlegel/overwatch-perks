import PerkIcon from '@/components/game/perk-icon';
import { Card, CardContent } from '@/components/ui/card';
import HighlightText from '@/components/ui/highlight-text';
import type { Perk } from '@/data/perks';
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
	perk: Perk;
}

export default function PerkCardBase({ className, perk, ...props }: Props) {
	if (perk === undefined) return <></>;
	return (
		<Card
			className={cn(
				'w-full outline-background-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
				className
			)}>
			<CardContent className="relative flex flex-col h-full text-center sm:gap-2 gap-1 sm:p-4 p-2 !pt-6 transition-colors">
				{/* <div className="flex w-full items-center justify-center">
					<PerkIcon perk={perk} className="size-12" />
				</div> */}
				<div className="absolute top-2 right-2">
					<PerkIcon perk={perk} className="size-12" />
				</div>
				{/* <div className="absolute top-2 left-2">
					<PerkIcon perk={perk} className="size-12" />
				</div> */}
				<div className="flex flex-col flex-1">
					<p className="font-semibold sm:text-lg text-base">{perk.name}</p>
					<div className="flex flex-1 items-center justify-center">
						<HighlightText className="sm:text-base text-sm mt-[0.4rem] sm:mt-2" text={perk.description} />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
