'use client';
import PerkCard from '@/components/landing-page/perk-card';
import { Button } from '@/components/ui/button';
import useGameState from '@/hooks/use-game-state';
export default function AnswerCards() {
	const { currPerk, heroPerks } = useGameState();
	return (
		<div className="flex flex-col w-full sm:gap-3 gap-2 sm:mt-4 mt-1">
			<div className="flex flex-row sm:gap-3 gap-2">
				<PerkCard perk={heroPerks[0]} index={0} />
				<PerkCard perk={heroPerks[1]} index={1} />
			</div>
			<div className="flex flex-row sm:gap-3 gap-2">
				<PerkCard perk={heroPerks[2]} index={2} />
				<PerkCard perk={heroPerks[3]} index={3} />
			</div>
		</div>
	);
}
