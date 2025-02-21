import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HighlightText from '@/components/ui/highlight-text';
import { Separator } from '@/components/ui/separator';
import type { Perk } from '@/data/perks';
import { useCallback } from 'react';

type Props = {
	perk: Perk;
	index: number;
};

export default function PerkCard({ perk, index }: Props) {
	if (!perk) return <></>;

	const onClick = useCallback(() => {
		console.log(`Cicked ${perk.name}`);
	}, [perk]);

	return (
		<Card
			className="transition-colors w-full"
			tabIndex={0}
			onClick={onClick}
			// biome-ignore lint/a11y/useSemanticElements: <explanation>
			role="button"
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					onClick();
				}
			}}>
			<CardContent className="flex flex-col h-full text-center sm:gap-2 gap-1 sm:p-4 p-2 transition-colors">
				<div className="flex flex-col flex-1">
					<p className="font-semibold sm:text-lg text-base">{perk.name}</p>
					<HighlightText className="sm:text-base text-sm" text={perk.description} />
				</div>
				<Separator className="mt-1" />
				<div className="w-full text-xs text-muted-foreground flex justify-between">
					<p>{perk.perkType}</p>
					<p>{index + 1}</p>
				</div>
			</CardContent>
		</Card>
	);
}
