import { type InfoDialogKey, useInfoDialogs } from '@/app/cheatsheet/hooks/use-info-dialog';
import { useTabParam } from '@/app/cheatsheet/hooks/use-tab-param';
import PerkIcon from '@/components/game/perk-icon';
import { Card, CardContent } from '@/components/ui/card';
import HighlightText from '@/components/ui/highlight-text';
import type { Perk } from '@/data/perks';
import { cn } from '@/lib/utils';
import { useCallback, type HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
	perk: Perk;
}

export default function PerkCardBase({ className, perk, ...props }: Props) {
	const [dialog, setDialog] = useInfoDialogs();
	const [tab, setTab] = useTabParam();
	const onClick = useCallback(() => {
		if (perk) {
			setDialog(`${perk.perkType}-${perk.perkIndex + 1}` as InfoDialogKey);
		}
	}, [perk, setDialog]);
	if (perk === undefined) return <></>;
	// TODO: convert to grid and have 4 row layout on mobile
	return (
		<Card
			className={cn(
				'w-full outline-background-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-secondary',
				className
			)}
			tabIndex={0}
			onClick={onClick}
			// biome-ignore lint/a11y/useSemanticElements: easier to keep card styling this way
			role="button"
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					onClick();
				}
			}}>
			<CardContent className="relative flex items-center justify-center flex-col h-full text-center sm:gap-2 gap-1 sm:p-4 p-2 transition-colors">
				{/* <div className="flex w-full items-center justify-center">
					<PerkIcon perk={perk} className="size-12" />
				</div> */}
				<div className="absolute sm:top-2 sm:right-2 top-1 right-1">
					<PerkIcon perk={perk} className="sm:size-11 size-9" />
				</div>
				{/* <div className="absolute top-2 left-2">
					<PerkIcon perk={perk} className="size-12" />
				</div> */}
				<div className="flex flex-1 flex-col">
					<p className="font-semibold sm:text-lg text-base">{perk.name}</p>
					<div className="flex flex-1 items-center justify-center sm:py-0 py-1 sm:pb-0 pb-2">
						<HighlightText className="sm:text-base text-sm mt-[0.4rem] sm:mt-3" text={perk.description} />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
