import { type InfoDialogKey, useInfoDialogs } from '@/app/cheatsheet/hooks/use-info-dialog';
import { TabKey } from '@/app/cheatsheet/hooks/use-tab-param';
import { useVoteMutation, useVotes } from '@/app/cheatsheet/hooks/use-vote-query';
import { SettingsItem } from '@/components/dialogs/setting-dialog-content';
import PerkIcon from '@/components/game/perk-icon';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { getHeroName, type HeroId } from '@/data/heroes';
import { PERKS } from '@/data/perks';
import { InfoIcon, SettingsIcon } from 'lucide-react';
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
	const { data: votes, isLoading } = useVotes(heroId);
	const { mutate: addVote, isPending } = useVoteMutation(heroId);

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
				<div className="absolute sm:top-2 sm:right-2 top-1 right-1">
					<PerkIcon perk={perk} className="sm:size-[4.25rem] size-14" />
				</div>
			</div>
			<ScrollArea type="scroll" className="h-[25rem]">
				<div className="flex-1">
					<p>{dialog}</p>
					<p>{heroId}</p>

					{isLoading ? (
						<p>loading...</p>
					) : (
						votes?.map((v) => (
							<p key={v.id}>
								{v.id}: {v.votes}
							</p>
						))
					)}
				</div>
				<Separator className="mt-8 mb-4" />
				<div className="flex items-center justify-center text-center w-full">37% of people prefer this minor perk (312 votes)</div>
			</ScrollArea>
			<DialogFooter>
				<div className="w-full flex justify-between items-center">
					<Button type="submit" onClick={handleVote} className="bg-primary-foreground text-white opacity-85 hover:bg-primary-foreground hover:opacity-100">
						Vote for this perk
					</Button>
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
