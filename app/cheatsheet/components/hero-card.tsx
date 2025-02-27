import HeroCard from '@/components/landing-page/hero-card';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { HeroId } from '@/data/heroes';

type Props = {
	heroId: HeroId;
};

export default function CheatsheetHeroCard({ heroId }: Props) {
	return (
		<Card className="transition-colors">
			<CardContent className="flex flex-col sm:gap-2 gap-1 sm:p-4 p-2 transition-colors">
				<div className="flex items-center justify-between">
					<HeroCard heroId={heroId} />
					<div className="flex w-full flex-col items-center justify-center gap-4">
						<h2 className="scroll-m-20 border-b pb-2 sm:text-3xl text-xl font-semibold tracking-tight first:mt-0">Hero info</h2>
						<h3 className="scroll-m-20 sm:text-4xl text-2xl font-semibold tracking-tight text-primary-foreground sm:py-2 py-1 px-4 text-center flex-1">
							{heroId}
						</h3>
						<div className="w-full pl-4">
							<Separator className="mt-1 " />
							<div className="flex items-center space-x-4 sm:text-sm text-xs text-muted-foreground w-full justify-center mt-2 sm:mb-[-0.4rem] ">
								<p>Footer</p>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
