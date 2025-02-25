'use client';
import PerkIcon from '@/components/game/perk-icon';
import { Card, CardContent } from '@/components/ui/card';
import HighlightText from '@/components/ui/highlight-text';
import { Separator } from '@/components/ui/separator';
import { CONFIG } from '@/config';
import type { Perk } from '@/data/perks';
import useAnswerCard from '@/hooks/use-answer-card';
import { useSetting } from '@/hooks/use-settings-param';
import { cn } from '@/lib/utils';
import { useCallback, useMemo, useRef } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	perk: Perk;
	index: number;
	correctPerkId: number;
}

export default function PerkCard({ perk, index, className, correctPerkId }: Props) {
	if (!perk) return <></>;

	// Card state/info
	const cardId = index + 1;
	const isCorrect = perk.id === correctPerkId;

	const cardRef = useRef<HTMLDivElement>(null);
	const { onClick, result } = useAnswerCard({ cardId, isCorrect, perk, cardRef });
	const [showDescription, _setDesc] = useSetting('showDescription');
	const [isInverse, _setInv] = useSetting('inverse');

	const DefaultContent = useCallback(() => {
		return (
			<CardContent className={'flex flex-col h-full text-center sm:gap-2 gap-1 sm:p-4 p-2 transition-colors'}>
				<div className="flex flex-col flex-1">
					<p className="font-semibold sm:text-lg text-base">{perk.name}</p>
					{showDescription && <HighlightText className="sm:text-base text-sm mt-[0.4rem] sm:mt-1" text={perk.description} />}
				</div>
				{showDescription && (
					<>
						<Separator className="mt-1 sm:mb-0 mb-1 bg-foreground opacity-[0.08]" />
						<div className="w-full text-xs font-medium sm:mb-[-0.25rem] text-muted-foreground flex justify-between">
							<p>
								<span className="font-semibold">{perk.perkType}</span>
							</p>
							{CONFIG.isDebug && <p>{isCorrect ? 'correct' : ''}</p>}
							<p>{cardId}</p>
						</div>
					</>
				)}
			</CardContent>
		);
	}, [cardId, isCorrect, perk.description, perk.name, perk.perkType, showDescription]);

	const InverseContent = useCallback(() => {
		return (
			<CardContent className={'flex flex-col h-full text-center sm:gap-2 gap-1 sm:p-4 p-2 transition-colors'}>
				<div className="flex items-center justify-center sm:py-6 py-4">
					<PerkIcon perk={perk} />
				</div>
				{/* <p className="absolute bottom-2 right-3 text-xs font-medium text-muted-foreground">{cardId}</p> */}
			</CardContent>
		);
	}, [perk]);

	return (
		<Card
			data-correct={result}
			className={cn(
				'w-full outline-background-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[correct=false]:outline-none data-[correct=false]:ring-2 data-[correct=false]:ring-ring data-[correct=false]:ring-offset-1 ring-offset-background hover:bg-secondary focus-visible:bg-secondary focus-visible:transition-none transition-colors data-[correct=false]:bg-red-600/45 data-[correct=true]:bg-green-600/45',
				className
			)}
			tabIndex={0}
			ref={cardRef}
			onClick={onClick}
			// biome-ignore lint/a11y/useSemanticElements: easier to keep card styling this way
			role="button"
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					onClick();
				}
			}}>
			{isInverse ? <InverseContent /> : <DefaultContent />}
		</Card>
	);
}
