import { Button } from '@/components/ui/button';
import { RefreshCwIcon } from 'lucide-react';
import Link from 'next/link';

type Props = {
	heroName?: string;
};

export default function HeroNameButton({ heroName }: Props) {
	return (
		<Link href={'/cheatsheet'}>
			<Button variant="ghost" className="h-auto" aria-label="Change hero">
				<h1 className="scroll-m-20 sm:text-4xl text-3xl font-bold tracking-tight text-center pb-[0.35rem] whitespace-break-spaces">
					{heroName}
					{/* {heroName} <RefreshCwIcon className="!size-[1.2rem] sm:ml-[0.35rem] ml-1 inline !transition-all" /> */}
				</h1>
				<span className="sr-only">Change hero</span>
			</Button>
		</Link>
	);
}
