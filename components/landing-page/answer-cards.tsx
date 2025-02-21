'use client';
import PerkCard from '@/components/landing-page/perk-description';
import useGameState from '@/hooks/use-game-state';
export default function AnswerCards() {
	const { currPerk } = useGameState();
	return (
		<div className="flex flex-col w-full gap-4 mt-4">
			<div className="flex flex-row gap-4">
				<PerkCard perk={currPerk} />
				<PerkCard perk={currPerk} />
			</div>
			<div className="flex flex-row gap-4">
				<PerkCard perk={currPerk} />
				<PerkCard perk={currPerk} />
			</div>
		</div>
	);
}
