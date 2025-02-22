'use client';
import { Button } from '@/components/ui/button';
import useGameState from '@/hooks/use-game-state';
import { CopyIcon, DicesIcon } from 'lucide-react';

export default function Controls() {
	const { rerollPerk } = useGameState();
	return (
		<div className="flex justify-between items-center mb-4">
			<Button variant="outline">
				<div className="flex flex-row gap-2">
					<p className="text-md font-semibold tracking-tight">Share streak</p>
					<div className="flex items-center justify-center">
						<CopyIcon className="h-4 w-4" />
						<span className="sr-only">Share streak</span>
					</div>
				</div>
			</Button>
			<Button className="bg-primary-foreground/90 text-white/85 hover:bg-primary-foreground" onClick={rerollPerk}>
				<div className="flex flex-row gap-2">
					<p className="text-md font-semibold tracking-tight">Reroll</p>
					<div className="flex items-center justify-center">
						<DicesIcon className="h-4 w-4" />
						<span className="sr-only">Reroll</span>
					</div>
				</div>
			</Button>
		</div>
	);
}
