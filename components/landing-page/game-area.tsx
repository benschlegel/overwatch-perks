import AnswerCardWrapper from '@/components/landing-page/answer-card-wrapper';
import Controls from '@/components/landing-page/controls';
import DonateText from '@/components/landing-page/donate-text';
import PerkInfo from '@/components/landing-page/perk-info';
import { Suspense } from 'react';

export default function GameArea() {
	return (
		<div className="flex flex-col gap-4">
			<Suspense>
				<PerkInfo />
				<AnswerCardWrapper />
				<Controls />
				<DonateText />
			</Suspense>
		</div>
	);
}
