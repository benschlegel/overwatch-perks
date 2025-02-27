import type { TabKey } from '@/app/cheatsheet/hooks/use-tab-param';
import HeroCard from '@/components/landing-page/hero-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getHeroName, type HeroId } from '@/data/heroes';
import Link from 'next/link';

type Props = {
	heroId: HeroId;
};

export default function CheatsheetHeroCard({ heroId }: Props) {
	const heroName = getHeroName(heroId);
	return (
		<Card className="transition-colors">
			<CardContent className="flex flex-col sm:gap-2 gap-1 sm:p-4 p-2 transition-colors">
				<div className="flex sm:px-2 items-center justify-between">
					<HeroCard heroId={heroId} />
					<div className="flex w-full flex-col items-center justify-center gap-4">
						<h2 className="scroll-m-20 border-b pb-2 sm:text-3xl text-xl font-semibold tracking-tight first:mt-0">Hero Info</h2>
						<h3 className="scroll-m-20 sm:text-4xl text-2xl font-bold tracking-tight sm:py-2 py-1 px-4 text-center flex-1">{heroName}</h3>
						<Link href="/cheatsheet">
							<Button className="bg-primary-foreground text-white opacity-85 hover:bg-primary-foreground hover:opacity-100">Switch hero</Button>
						</Link>
						<div className="w-full pl-4">
							<Separator className="mt-1 " />
							<div className="flex items-center space-x-4 sm:text-sm text-xs text-muted-foreground w-full justify-center mt-2 sm:mb-[-0.4rem] ">
								<TabsList className="flex w-full mx-2">
									<TabsTrigger className="flex-1" value={'info' as TabKey}>
										Perk info
									</TabsTrigger>
									<TabsTrigger className="flex-1" value={'community' as TabKey}>
										Community
									</TabsTrigger>
									<TabsTrigger className="flex-1" value={'personal' as TabKey}>
										Personal
									</TabsTrigger>
								</TabsList>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
