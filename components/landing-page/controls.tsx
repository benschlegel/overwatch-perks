'use client';
import { Button } from '@/components/ui/button';
import useGameState from '@/hooks/use-game-state';
import { DicesIcon } from 'lucide-react';

export default function Controls() {
	const { rerollPerk } = useGameState();
	return (
		<div className="flex justify-between items-center mb-4">
			<Button variant="outline">Share</Button>
			<Button className="bg-primary-foreground/90 text-white/85 hover:bg-primary-foreground" onClick={rerollPerk}>
				<div className="flex flex-row gap-2">
					<p className="text-md font-semibold tracking-tight">Reshuffle</p>
					<div className="flex items-center justify-center">
						<DicesIcon className="h-4 w-4" />
						<span className="sr-only">Reroll</span>
					</div>
				</div>
			</Button>
		</div>
	);
}
