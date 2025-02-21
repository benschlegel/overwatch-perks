import { Card, CardContent } from '@/components/ui/card';
import type { Perk } from '@/data/perks';

type Props = {
	perk: Perk;
};

export default function PerkCard({ perk }: Props) {
	return (
		<Card className="transition-colors w-full">
			<CardContent className="flex flex-col text-center sm:gap-2 gap-1 sm:p-4 p-2 transition-colors">
				<p className="font-semibold text-lg">{perk.name}</p>
				<p className="text-base">{perk.description}</p>
			</CardContent>
		</Card>
	);
}
