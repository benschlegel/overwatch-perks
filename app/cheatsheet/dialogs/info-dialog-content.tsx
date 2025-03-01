import NavButton from '@/app/cheatsheet/components/nav-button';
import { type InfoDialogKey, useInfoDialogs } from '@/app/cheatsheet/hooks/use-info-dialog';
import { usePerkVotes, useVoteMutation, useVotes } from '@/app/cheatsheet/hooks/use-vote-query';
import PerkIcon from '@/components/game/perk-icon';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import HighlightText from '@/components/ui/highlight-text';
import { Progress } from '@/components/ui/progress';
import { getHeroName, type HeroId } from '@/data/heroes';
import { PERKS } from '@/data/perks';
import { InfoIcon } from 'lucide-react';
import React, { memo, useCallback, useEffect, useState } from 'react';

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
	const [isVoteDisabled, setIsVoteDisabled] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined' && perk !== undefined) {
			const localStorageKey = `vote-${heroId}-${perk.perkType}`;
			const oldState = localStorage.getItem(localStorageKey);
			console.log(`Old state: ${oldState}`);
			setIsVoteDisabled(oldState !== null);
		}
	}, [heroId, perk]);

	const handleVote = useCallback(() => {
		// TODO: check localStorage before voting
		if (perk !== undefined) {
			setIsVoteDisabled(true);
			if (typeof window !== 'undefined') {
				const localStorageKey = `vote-${heroId}-${perk.perkType}`;
				localStorage.setItem(localStorageKey, perk.perkIndex.toString());
			}
			addVote(perk.id);
		}
	}, [perk, addVote, heroId]);

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
			<div className="h-[22rem] flex flex-col justify-center items-center">
				<div className="flex flex-1  w-full flex-col gap-8 items-start justify-start">
					<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{perk.name}</h2>
					<h3 className="scroll-m-20 leading-7 text-xl tracking-tight">
						<HighlightText text={perk.description} />
					</h3>
				</div>

				<div className="mb-6 w-full">
					{/* <blockquote className="sm:leading-7 w-full italic text-sm tracking-wide opacity-90 border-l-[3px] pl-4 mt-1">
						Voting indicates you prefer this perk over {hero}'s other {perk.perkType} perk.
					</blockquote> */}
					<Progress value={votePercentage ?? 0} className="h-2 mt-4 mb-2" />
					<p className="leading-7 text-center w-full">
						{votePercentageFormatted}% prefer this <span className="font-semibold"> {perk.perkType} </span> perk{' '}
						<span className="text-muted-foreground">
							({perkVotes} {perkVotes === 1 ? 'vote' : 'votes'})
						</span>
					</p>
				</div>
			</div>
			{/* </ScrollArea> */}
			<DialogFooter>
				<div className="w-full flex justify-between items-center">
					<Button
						type="submit"
						disabled={isVoteDisabled}
						onClick={handleVote}
						className="bg-primary-foreground text-white opacity-90 hover:bg-primary-foreground hover:opacity-100">
						Vote for this perk
					</Button>
					<div className="flex justify-between items-center gap-2">
						<NavButton direction="left" perkIndex={perk.perkIndex} perkType={perk.perkType} />
						<p className="sm:block hidden">
							perk {perk.perkIndex + 1} ({perk.perkIndex === 0 ? 'left' : 'right'})
						</p>
						<NavButton direction="right" perkIndex={perk.perkIndex} perkType={perk.perkType} />
					</div>
					<MemoizedButtonRow onClick={handleClose} />
				</div>
			</DialogFooter>
		</DialogContent>
	);
}

export function getPerk(hero: HeroId, tab: InfoDialogKey) {
	const split = tab.split('-');
	if (split.length !== 2) return undefined;
	const perkType = split[0];
	const perkIndex = Number(split[1]) - 1;
	return PERKS.find((p) => p.heroId === hero && p.perkIndex === perkIndex && p.perkType === perkType);
}
