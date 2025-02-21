import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HighlightText from '@/components/ui/highlight-text';
import { Separator } from '@/components/ui/separator';
import type { Perk } from '@/data/perks';
import { cn } from '@/lib/utils';
import { useCallback, useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	perk: Perk;
	isCorrect?: boolean;
	index: number;
}

export default function PerkCard({ perk, index, className, isCorrect = false }: Props) {
	if (!perk) return <></>;

	const [hasClicked, setHasClicked] = useState(false);
	const onClick = useCallback(() => {
		setHasClicked(true);
	}, []);

	// TODO: set global state and do this based on global state too (e.g. show correct one)
	// TODO: do this via gameState context
	const result = hasClicked ? isCorrect : undefined;

	return (
		<Card
			data-correct={result}
			className={cn(
				'w-full outline-background-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background hover:bg-secondary focus-visible:bg-secondary focus-visible:transition-none transition-colors data-[correct=false]:bg-red-600/45 data-[correct=true]:bg-green-600/45',
				className
			)}
			tabIndex={0}
			onClick={onClick}
			// biome-ignore lint/a11y/useSemanticElements: <explanation>
			role="button"
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					onClick();
				}
			}}>
			<CardContent className={'flex flex-col h-full text-center sm:gap-2 gap-1 sm:p-4 p-2 transition-colors'}>
				<div className="flex flex-col flex-1">
					<p className="font-semibold sm:text-lg text-base">{perk.name}</p>
					<HighlightText className="sm:text-base text-sm" text={perk.description} />
				</div>
				<Separator className="mb-1 mt-2" />
				<div className="w-full text-xs text-muted-foreground flex justify-between">
					<p>{perk.perkType}</p>
					<p>{index + 1}</p>
				</div>
			</CardContent>
		</Card>
	);
}
