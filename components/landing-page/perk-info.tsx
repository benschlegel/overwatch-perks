import HeroCard from '@/components/landing-page/hero-card';
import { Card, CardContent } from '@/components/ui/card';
import { DEFAULT_HERO_ID } from '@/data/heroes';
export default function PerkInfo() {
	return (
		<Card className="transition-colors">
			<CardContent className="flex flex-col sm:gap-2 gap-1 sm:p-4 p-2 transition-colors">
				<div className="flex items-center justify-between">
					<HeroCard heroId={'ana'} />
					<div className="flex w-full flex-col items-center justify-center">
						<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Guess this perk</h2>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
