import { useEffect, useCallback, useState, lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { CircleHelpIcon } from 'lucide-react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
const LazyHelpContent = lazy(() => import('@app/cheatsheet/components/help-dialog-content'));

export function HelpDialog() {
	const [open, setOpen] = useState(false);

	const toggleDialogOpen = useCallback(() => {
		setOpen(open !== true);
	}, [open]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'e' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				toggleDialogOpen();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [toggleDialogOpen]);

	return (
		<Dialog open={open} onOpenChange={toggleDialogOpen} aria-describedby="Help menu">
			<DialogTrigger asChild>{HelpTriggerButton}</DialogTrigger>
			<Suspense>
				<LazyHelpContent setOpen={setOpen} />
			</Suspense>
		</Dialog>
	);
}

export const HelpTriggerButton = (
	<Button variant="ghost" size="icon" className="!p-0" aria-label="Help">
		<CircleHelpIcon className="!h-[1.3rem] !w-[1.3rem] !transition-all" />
	</Button>
);
