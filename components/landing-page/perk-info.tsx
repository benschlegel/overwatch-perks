import HeroCard from '@/components/landing-page/hero-card';
import { Card, CardContent } from '@/components/ui/card';
import { DEFAULT_HERO_ID } from '@/data/heroes';
export default function PerkInfo() {
	return (
		<Card className="transition-colors">
			<CardContent className="flex flex-col sm:gap-2 gap-1 sm:p-4 p-2 transition-colors">
				<div className="flex items-center justify-between">
					<HeroCard heroId={'ana'} />
				</div>
			</CardContent>
		</Card>
	);
}
