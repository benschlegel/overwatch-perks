import { Card, CardContent } from '@/components/ui/card';
import HighlightText from '@/components/ui/highlight-text';
import { Separator } from '@/components/ui/separator';
import type { Perk } from '@/data/perks';

type Props = {
	perk: Perk;
	index: number;
};

export default function PerkCard({ perk, index }: Props) {
	if (!perk) return <></>;
	return (
		<Card className="transition-colors w-full">
			<CardContent className="flex flex-col text-center sm:gap-2 gap-1 sm:p-4 p-2 transition-colors">
				<p className="font-semibold text-lg">{perk.name}</p>
				<HighlightText className="text-base" text={perk.description} />
				<Separator className="mt-1" />
				<div className="w-full text-xs text-muted-foreground flex justify-between">
					<p>{perk.perkType}</p>
					<p>{index + 1}</p>
				</div>
			</CardContent>
		</Card>
	);
}
