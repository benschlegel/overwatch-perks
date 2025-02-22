'use client';
import PerkCard from '@/components/landing-page/perk-card';
import useGameState from '@/hooks/use-game-state';
export default function AnswerCards() {
	const { currPerk, heroPerks } = useGameState();

	if (!currPerk) return <></>;
	return (
		<div className="flex flex-col w-full sm:gap-3 gap-2 sm:mt-2 mt-1">
			<div className="flex flex-row sm:gap-3 gap-2">
				<PerkCard perk={heroPerks[0]} index={0} correctPerkId={currPerk.id} />
				<PerkCard perk={heroPerks[1]} index={1} correctPerkId={currPerk.id} />
			</div>
			<div className="flex flex-row sm:gap-3 gap-2">
				<PerkCard perk={heroPerks[2]} index={2} correctPerkId={currPerk.id} />
				<PerkCard perk={heroPerks[3]} index={3} correctPerkId={currPerk.id} />
			</div>
		</div>
	);
}
