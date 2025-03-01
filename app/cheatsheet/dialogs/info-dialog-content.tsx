import { type InfoDialogKey, useInfoDialogs } from '@/app/cheatsheet/hooks/use-info-dialog';
import { TabKey } from '@/app/cheatsheet/hooks/use-tab-param';
import { usePerkVotes, useVoteMutation, useVotes } from '@/app/cheatsheet/hooks/use-vote-query';
import { SettingsItem } from '@/components/dialogs/setting-dialog-content';
import PerkIcon from '@/components/game/perk-icon';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import HighlightText from '@/components/ui/highlight-text';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { getHeroName, type HeroId } from '@/data/heroes';
import { type PerkIndex, PERKS, type PerkType } from '@/data/perks';
import { ChevronLeftIcon, ChevronRightIcon, InfoIcon, SettingsIcon } from 'lucide-react';
import React, { memo, useCallback } from 'react';

type Props = {
	heroId: HeroId;
};

export default function InfoDialogContent({ heroId }: Props) {
	const [dialog, setDialog] = useInfoDialogs();
	// Memoize the setDialog function to prevent unnecessary re-renders
	const handleClose = useCallback(() => {
		setDialog('none');
	}, [setDialog]);

	const MemoizedButtonRow = memo(({ onClick }: { onClick: () => void }) => (
		<Button type="submit" variant="outline" autoFocus onClick={onClick}>
			Close
		</Button>
	));
	const perk = getPerk(heroId, dialog);
	const hero = getHeroName(heroId);
	const { data: allVotes, isLoading } = useVotes(heroId);
	const { mutate: addVote, isPending } = useVoteMutation(heroId);
	const { totalHeroVotes, totalTypeVotes, perkVotes, votePercentage, votePercentageFormatted } = usePerkVotes(heroId, perk);

	const handleVote = useCallback(() => {
		if (perk !== undefined) {
			addVote(perk.id);
		}
	}, [perk, addVote]);

	if (perk === undefined) return <></>;

	return (
		<DialogContent className="sm:max-w-[36rem] max-h-full py-6 px-3 md:px-7" aria-describedby="Info for perk">
			<DialogHeader>
				<DialogTitle className="flex flex-row gap-2 items-center text-left">
					<InfoIcon className="h-[1.3rem] w-[1.3rem] transition-all" />
					Perk Info
				</DialogTitle>
				<DialogDescription className="mt-2 text-left mb-0">
					<span className="capitalize">{perk.perkType}</span> perk {perk.perkIndex + 1} ({perk.perkIndex === 0 ? 'left click' : 'right click'})
				</DialogDescription>
			</DialogHeader>
			<div className="relative">
				<div className="absolute sm:top-0 top-2 sm:right-0 right-2">
					<PerkIcon perk={perk} className="sm:size-[4.25rem] size-14" />
				</div>
			</div>
			{/* <ScrollArea type="scroll" className="h-[25rem]"> */}
			<div className="h-[25rem] flex flex-col justify-center items-center">
				<div className="flex flex-1  w-full flex-col gap-8 items-start justify-start">
					<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{perk.name}</h2>
					<h3 className="scroll-m-20 leading-7 text-xl tracking-tight">
						<HighlightText text={perk.description} />
					</h3>
				</div>
				<Progress value={votePercentage ?? 0} className="h-2 mt-8 mb-4" />
				<p className="leading-7 [&:not(:first-child)]:mt-6 text-center w-full">
					{votePercentageFormatted}% prefer this <span className="font-semibold"> minor </span> perk{' '}
					<span className="text-muted-foreground">
						({perkVotes} {perkVotes === 1 ? 'vote' : 'votes'})
					</span>
				</p>
			</div>
			{/* </ScrollArea> */}
			<DialogFooter>
				<div className="w-full flex justify-between items-center">
					<Button type="submit" onClick={handleVote} className="bg-primary-foreground text-white opacity-90 hover:bg-primary-foreground hover:opacity-100">
						Vote for this perk
					</Button>
					<div className="flex justify-between items-center gap-2">
						<NavButton direction="left" perkIndex={perk.perkIndex} perkType={perk.perkType} />
						<p>
							<span className="capitalize">{perk.perkType}</span> perk {perk.perkIndex + 1} (left)
						</p>
						<NavButton direction="right" perkIndex={perk.perkIndex} perkType={perk.perkType} />
					</div>
					<MemoizedButtonRow onClick={handleClose} />
				</div>
			</DialogFooter>
		</DialogContent>
	);
}

function NavButton({ direction, perkIndex, perkType }: { direction: 'left' | 'right'; perkIndex: PerkIndex; perkType: PerkType }) {
	const [infoDialog, setInfoDialog] = useInfoDialogs();
	const isValid = direction === 'left' ? perkIndex === 1 : perkIndex === 0;
	const onClick = useCallback(() => {
		const newIndex = ((perkIndex + 1) % 2) + 1;
		const newDialog = `${perkType}-${newIndex}` as InfoDialogKey;
		console.log('new index: ', newIndex);
		console.log('new dialog: ', newDialog);
		setInfoDialog(newDialog);
		//
	}, [perkIndex, perkType, setInfoDialog]);
	return (
		<Button variant="ghost" size="icon" className="!p-0" aria-label={`Go ${direction}`} onClick={onClick} disabled={!isValid}>
			{direction === 'left' ? <ChevronLeftIcon className="!size-[1.2rem] !transition-all" /> : <ChevronRightIcon className="!size-[1.2rem] !transition-all" />}
			<span className="sr-only">Go {direction}</span>
		</Button>
	);
}

export function getPerk(hero: HeroId, tab: InfoDialogKey) {
	const split = tab.split('-');
	if (split.length !== 2) return undefined;
	const perkType = split[0];
	const perkIndex = Number(split[1]) - 1;
	return PERKS.find((p) => p.heroId === hero && p.perkIndex === perkIndex && p.perkType === perkType);
}
