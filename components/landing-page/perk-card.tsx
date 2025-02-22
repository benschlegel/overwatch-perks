import { Card, CardContent } from '@/components/ui/card';
import HighlightText from '@/components/ui/highlight-text';
import { Separator } from '@/components/ui/separator';
import { CONFIG } from '@/config';
import type { Perk } from '@/data/perks';
import useAnswerCard from '@/hooks/use-answer-card';
import { cn } from '@/lib/utils';

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

	const { onClick, result } = useAnswerCard({ cardId, isCorrect });

	return (
		<Card
			data-correct={result}
			className={cn(
				'w-full outline-background-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background hover:bg-secondary focus-visible:bg-secondary focus-visible:transition-none transition-colors data-[correct=false]:bg-red-600/45 data-[correct=true]:bg-green-600/45',
				className
			)}
			tabIndex={0}
			onClick={onClick}
			// biome-ignore lint/a11y/useSemanticElements: easier to keep card styling this way
			role="button"
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					onClick();
				}
			}}>
			<CardContent className={'flex flex-col h-full text-center sm:gap-2 gap-1 sm:p-4 p-2 transition-colors'}>
				<div className="flex flex-col flex-1">
					<p className="font-semibold sm:text-lg text-base">{perk.name}</p>
					<HighlightText className="sm:text-base text-sm mt-[0.4rem] sm:mt-1" text={perk.description} />
				</div>
				<Separator className="mt-1 sm:mb-0 mb-1 bg-foreground opacity-[0.08]" />
				<div className="w-full text-xs font-medium sm:mb-[-0.25rem] text-muted-foreground flex justify-between">
					<p>
						<span className="font-semibold">{perk.perkType}</span>
					</p>
					{CONFIG.isDebug && <p>{isCorrect ? 'correct' : ''}</p>}
					<p>{cardId}</p>
				</div>
			</CardContent>
		</Card>
	);
}
