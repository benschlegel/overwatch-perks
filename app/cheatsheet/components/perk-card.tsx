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
			<CardContent className="flex flex-col h-full text-center sm:gap-2 gap-1 sm:p-4 p-2 transition-colors">
				<div className="flex flex-col flex-1">
					<p className="font-semibold sm:text-lg text-base">{perk.name}</p>
					<HighlightText className="sm:text-base text-sm mt-[0.4rem] sm:mt-1" text={perk.description} />
				</div>
			</CardContent>
		</Card>
	);
}
