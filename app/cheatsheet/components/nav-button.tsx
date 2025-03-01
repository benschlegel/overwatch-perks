'use client';
import { useInfoDialogs, type InfoDialogKey } from '@/app/cheatsheet/hooks/use-info-dialog';
import { Button } from '@/components/ui/button';
import type { PerkIndex, PerkType } from '@/data/perks';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useCallback, useEffect } from 'react';

export default function NavButton({ direction, perkIndex, perkType }: { direction: 'left' | 'right'; perkIndex: PerkIndex; perkType: PerkType }) {
	const [_infoDialog, setInfoDialog] = useInfoDialogs();

	const isValid = direction === 'left' ? perkIndex === 1 : perkIndex === 0;

	const onClick = useCallback(() => {
		const newIndex = ((perkIndex + 1) % 2) + 1;
		const newDialog = `${perkType}-${newIndex}` as InfoDialogKey;
		setInfoDialog(newDialog);
	}, [perkIndex, perkType, setInfoDialog]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
				e.preventDefault();
				onClick();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [onClick]);

	return (
		<Button variant="ghost" size="icon" className="!p-0" aria-label={`Go ${direction}`} onClick={onClick} disabled={!isValid}>
			{direction === 'left' ? <ChevronLeftIcon className="!size-[1.2rem] !transition-all" /> : <ChevronRightIcon className="!size-[1.2rem] !transition-all" />}
			<span className="sr-only">Go {direction}</span>
		</Button>
	);
}
