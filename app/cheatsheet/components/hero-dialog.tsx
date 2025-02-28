'use client';
import HeroDialogContent from '@/app/cheatsheet/components/hero-dialog-content';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import type { HeroId } from '@/data/heroes';
import { MessageSquareTextIcon } from 'lucide-react';
import { type Dispatch, type SetStateAction, useState } from 'react';

type Props = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};

export function HeroDialog({ open, setOpen }: Props) {
	return (
		<Dialog open={open} onOpenChange={(val) => (val === true ? setOpen(true) : setOpen(false))}>
			{/* <DialogTrigger asChild>{FeedbackTriggerButton}</DialogTrigger> */}
			<HeroDialogContent setOpen={setOpen} />
		</Dialog>
	);
}
