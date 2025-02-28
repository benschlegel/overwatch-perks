import CheatsheetHeroCard from '@/app/cheatsheet/components/cheatsheet-hero-image';
import type { TabKey } from '@/app/cheatsheet/hooks/use-tab-param';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getHeroName, type HeroId } from '@/data/heroes';

type Props = {
	heroId: HeroId;
};

export default function CheatsheetHeroCardWrapper({ heroId }: Props) {
	const heroName = getHeroName(heroId);
	return (
		<Card className="transition-colors">
			<CardContent className="flex flex-col sm:gap-2 gap-1 sm:p-4 p-2 transition-colors">
				<div className="flex items-stretch justify-between gap-4">
					<CheatsheetHeroCard heroId={heroId} />
					<div className="flex w-full flex-col items-center justify-center gap-4">
						<h2 className="scroll-m-20 border-b sm:text-3xl text-xl font-semibold tracking-tight first:mt-0">Perk Info</h2>
						<h1 className="scroll-m-20 sm:text-4xl text-3xl font-bold tracking-tight text-center flex-1 flex items-center">{heroName}</h1>
						{/* <Link href="/cheatsheet">
							<Button className="bg-primary-foreground text-white opacity-85 hover:bg-primary-foreground hover:opacity-100">Switch hero</Button>
						</Link>  */}
						<div className="w-full flex flex-col gap-3">
							<Separator />
							<div className="flex items-center sm:space-x-4 sm:text-sm text-xs text-muted-foreground w-full justify-center">
								<TabsList className="flex w-full ">
									<TabsTrigger className="flex-1" value={'info' as TabKey}>
										Info
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
