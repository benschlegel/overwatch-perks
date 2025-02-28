'use client';
import { HeroSelectContext } from '@/app/cheatsheet/context/HeroSelectContext';
import { Dialog } from '@/components/ui/dialog';
import { type Dispatch, lazy, type SetStateAction, Suspense, useContext, useState } from 'react';
const LazyHeroDialogContent = lazy(() => import('@/app/cheatsheet/components/hero-dialog-content'));

export function HeroDialog() {
	const { isOpen, setIsOpen } = useContext(HeroSelectContext);
	return (
		<Dialog open={isOpen} onOpenChange={(val) => (val === true ? setIsOpen(true) : setIsOpen(false))}>
			{/* <DialogTrigger asChild>{FeedbackTriggerButton}</DialogTrigger> */}
			<Suspense>
				<LazyHeroDialogContent setOpen={setIsOpen} />
			</Suspense>
		</Dialog>
	);
}
