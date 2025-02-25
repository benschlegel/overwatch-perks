'use client';
import PerkIcon from '@/components/game/perk-icon';
import HeroCard from '@/components/landing-page/hero-card';
import { BouncyText } from '@/components/ui/BouncyText';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CONFIG } from '@/config';
import { useGameScore } from '@/context/GameScoreContext';
import useGameState from '@/hooks/use-game-state';
import { useSetting } from '@/hooks/use-settings-param';

export default function PerkInfo() {
	const { currPerk } = useGameState();
	const { bestStreak, currentStreak } = useGameScore();
	const [isDebugMode, _] = useSetting('debug');
	const [isInverse, _inv] = useSetting('inverse');
	return (
		<Card className="transition-colors">
			<CardContent className="flex flex-col sm:gap-2 gap-1 sm:p-4 p-2 transition-colors">
				<div className="flex items-center justify-between">
					<HeroCard heroId={currPerk?.heroId} />
					<div className="flex w-full flex-col items-center justify-center gap-4">
						<h2 className="scroll-m-20 border-b pb-2 sm:text-3xl text-xl font-semibold tracking-tight first:mt-0">Guess this perk</h2>
						{isInverse === false ? (
							<PerkIcon perk={currPerk} />
						) : (
							<h3 className="scroll-m-20 sm:text-4xl text-2xl font-semibold tracking-tight text-primary-foreground sm:py-2 py-1 px-4 text-center flex-1">
								{currPerk?.name}
							</h3>
						)}
						<div className="w-full pl-4">
							<Separator className="mt-1" />
							<div className="flex h-5 items-center space-x-4 sm:text-sm text-xs text-muted-foreground w-full justify-center mt-4">
								<p className="text-center">
									Current Streak:{' '}
									<BouncyText className="sm:block text-white font-bold" text={currentStreak.toString()}>
										{currentStreak}
									</BouncyText>
								</p>
								<Separator orientation="vertical" />
								<p className="text-center">
									Best Streak:{' '}
									<BouncyText className="sm:block text-white font-bold" text={bestStreak.toString()}>
										{bestStreak}
									</BouncyText>
								</p>
								{(CONFIG.isDebug || isDebugMode) && (
									<>
										<Separator orientation="vertical" />
										<p className="text-center">
											id: <span className="sm:block">{currPerk?.id}</span>
										</p>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
