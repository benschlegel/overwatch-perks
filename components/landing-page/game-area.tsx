import AnswerCards from '@/components/landing-page/answer-cards';
import PerkInfo from '@/components/landing-page/perk-info';

export default function GameArea() {
	return (
		<div className="flex flex-col gap-4">
			<PerkInfo />
			<AnswerCards />
		</div>
	);
}
