'use client';
import { useInfoDialogs } from '@/app/cheatsheet/hooks/use-info-dialog';
import { Dialog } from '@/components/ui/dialog';
import type { HeroId } from '@/data/heroes';
import { lazy, useCallback, useEffect, useState } from 'react';

const InfoDialogContentLazy = lazy(() => import('@/app/cheatsheet/dialogs/info-dialog-content'));

type Props = {
	heroId: HeroId;
};

export function InfoDialog({ heroId }: Props) {
	const [dialog, setDialog] = useInfoDialogs();
	const [open, setOpen] = useState(dialog !== 'none');

	useEffect(() => {
		setOpen(dialog !== 'none');
	}, [dialog]);

	const switchDialog = useCallback(
		(newVal: boolean) => {
			if (newVal === false) {
				setOpen(false);
				setDialog('none');
			}
		},
		[setDialog]
	);

	return (
		<Dialog open={open} onOpenChange={switchDialog}>
			<InfoDialogContentLazy heroId={heroId} />
		</Dialog>
	);
}
