import { Button } from '@/components/ui/button';
import { DicesIcon } from 'lucide-react';

export default function Controls() {
	return (
		<div className="flex justify-between items-center">
			<Button variant="outline">Share</Button>
			<Button className="bg-primary-foreground/90 text-white/85 hover:bg-primary-foreground">
				<div className="flex flex-row gap-2">
					<p className="text-md font-semibold tracking-tight">Reshuffle</p>
					<div className="flex items-center justify-center">
						<DicesIcon className="h-4 w-4" />
						<span className="sr-only">Reshuffle</span>
					</div>
				</div>
			</Button>
		</div>
	);
}
