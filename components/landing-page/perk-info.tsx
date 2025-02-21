'use client';
import PerkIcon from '@/components/game/perk-icon';
import HeroCard from '@/components/landing-page/hero-card';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import useGameState from '@/hooks/use-game-state';

export default function PerkInfo() {
	const { currPerk, setCurrPerk } = useGameState();
	return (
		<Card className="transition-colors">
			<CardContent className="flex flex-col sm:gap-2 gap-1 sm:p-4 p-2 transition-colors">
				<div className="flex items-center justify-between">
					<HeroCard heroId={currPerk?.heroId} />
					<div className="flex w-full flex-col items-center justify-center gap-4">
						<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Guess this perk</h2>
						<PerkIcon />
						<div className="w-full pl-4">
							<Separator className="my-1" />
							<div className="flex h-5 items-center space-x-4 text-sm text-muted-foreground w-full justify-center mt-2">
								<div>Current Streak: 0</div>
								<Separator orientation="vertical" />
								<div>Best Streak: 0</div>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
