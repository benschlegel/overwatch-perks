'use client';
import { Button } from '@/components/ui/button';
import useGameState from '@/hooks/use-game-state';
import { CopyIcon, DicesIcon } from 'lucide-react';

export default function Controls() {
	const { rerollPerk, gameState, restartGame } = useGameState();
	return (
		<div className="flex justify-between items-center mb-4">
			<Button variant="outline" className="px-3 sm:px-4">
				<div className="flex flex-row gap-2">
					<p className="text-md font-semibold tracking-tight">Share streak</p>
					<div className="flex items-center justify-center">
						<CopyIcon className="h-4 w-4" />
						<span className="sr-only">Share streak</span>
					</div>
				</div>
			</Button>
			<Button variant="secondary" disabled={gameState === 'starting' || gameState === 'in-progress'} onClick={rerollPerk} className="sm:px-8 px-9">
				<p>Next</p>
				<kbd className="pointer-events-none sm:inline-flex hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
					C
				</kbd>
			</Button>
			<Button className="bg-primary-foreground/85 text-white/85 hover:bg-primary-foreground" onClick={restartGame}>
				<div className="flex flex-row gap-2">
					<p className="tracking-wide">Restart</p>
					<div className="flex items-center justify-center">
						<DicesIcon className="h-4 w-4" />
						<span className="sr-only font-medium leading-none">Restart</span>
					</div>
					{/* <kbd className="pointer-events-none sm:inline-flex hidden h-5 select-none items-center gap-1 rounded border border-secondary/60 bg-secondary/60 px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
						r
					</kbd> */}
				</div>
			</Button>
		</div>
	);
}
