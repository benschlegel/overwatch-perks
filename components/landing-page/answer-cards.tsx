'use client';
import PerkCard from '@/components/landing-page/perk-description';
import useGameState from '@/hooks/use-game-state';
export default function AnswerCards() {
	const { currPerk } = useGameState();
	return (
		<div className="flex flex-col w-full gap-4 mt-4">
			<div className="flex flex-row gap-4">
				<PerkCard perk={currPerk} index={0} />
				<PerkCard perk={currPerk} index={1} />
			</div>
			<div className="flex flex-row gap-4">
				<PerkCard perk={currPerk} index={2} />
				<PerkCard perk={currPerk} index={3} />
			</div>
		</div>
	);
}
