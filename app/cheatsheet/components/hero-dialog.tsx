'use client';
import FeedbackContent from '@/components/dialogs/feedback-content';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import type { HeroId } from '@/data/heroes';
import { MessageSquareTextIcon } from 'lucide-react';
import { parseAsBoolean, useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';

const DIALOG_KEY = 'hero-select';

type Props = {
	selectedHeroId?: HeroId;
};

export function HeroDialog({ selectedHeroId: selectedHero }: Props) {
	const [open, setOpen] = useState(selectedHero === undefined);
	return (
		<Dialog open={open} onOpenChange={(val) => (val === true ? setOpen(true) : setOpen(false))}>
			<DialogTrigger asChild>{FeedbackTriggerButton}</DialogTrigger>
			<FeedbackContent setOpen={setOpen} />
		</Dialog>
	);
}

export const FeedbackTriggerButton = (
	<Button variant="ghost" size="icon" className="!p-0" aria-label="Help">
		<MessageSquareTextIcon className="!size-[1.2rem] !transition-all" />
		<span className="sr-only">Send feedback</span>
	</Button>
);
