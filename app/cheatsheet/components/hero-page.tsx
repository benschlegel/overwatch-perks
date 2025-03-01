'use client';
import CheatsheetArea from '@/app/cheatsheet/components/cheatsheet-area';
import Header from '@/app/cheatsheet/components/header';
import { HeroDialog } from '@/app/cheatsheet/components/hero-dialog';
import { HeroSelectContext } from '@/app/cheatsheet/context/HeroSelectContext';
import Socials from '@/components/socials';
import type { HeroId } from '@/data/heroes';
import { useContext, useEffect, useState } from 'react';

const DEFAULT_HERO: HeroId = 'tracer';

type Props = {
	heroId?: HeroId;
};
export default function HeroPage({ heroId }: Props) {
	const { setIsOpen } = useContext(HeroSelectContext);
	// const [isOpen, setIsOpen] = useState(heroId === undefined);
	useEffect(() => {
		if (heroId !== undefined) {
			setIsOpen(false);
		}
	}, [heroId, setIsOpen]);

	return (
		<div>
			<HeroDialog />
			<Socials />
			<Header />
			<CheatsheetArea heroId={heroId ?? DEFAULT_HERO} />
		</div>
	);
}
