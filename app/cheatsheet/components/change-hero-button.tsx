'use client';
import { HeroSelectContext } from '@/app/cheatsheet/context/HeroSelectContext';
import { Button } from '@/components/ui/button';
import { RefreshCwIcon } from 'lucide-react';
import React, { useCallback, useContext } from 'react';

export default function ChangeHeroButton() {
	const { setIsOpen } = useContext(HeroSelectContext);

	const onClick = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);
	return (
		<Button variant="outline" onClick={onClick}>
			Change heroes <RefreshCwIcon className="text-text" />
		</Button>
	);
}
