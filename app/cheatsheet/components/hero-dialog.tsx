'use client';
import { HeroSelectContext } from '@/app/cheatsheet/context/HeroSelectContext';
import { Dialog } from '@/components/ui/dialog';
import { lazy, Suspense, useCallback, useContext, useEffect } from 'react';
const LazyHeroDialogContent = lazy(() => import('@/app/cheatsheet/components/hero-dialog-content'));

export function HeroDialog() {
	const { isOpen, setIsOpen } = useContext(HeroSelectContext);

	const toggleDialogOpen = useCallback(() => {
		setIsOpen(isOpen !== true);
	}, [isOpen, setIsOpen]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				toggleDialogOpen();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [toggleDialogOpen]);

	return (
		<Dialog open={isOpen} onOpenChange={(val) => (val === true ? setIsOpen(true) : setIsOpen(false))}>
			{/* <DialogTrigger asChild>{FeedbackTriggerButton}</DialogTrigger> */}
			<Suspense>
				<LazyHeroDialogContent setOpen={setIsOpen} />
			</Suspense>
		</Dialog>
	);
}
