import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import HotkeyInfo from '@/components/ui/hotkey-info';
import LinkButton from '@/components/ui/link-button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useDialogParams } from '@/hooks/use-dialog-param';
import { CircleHelpIcon, Clapperboard, LightbulbIcon } from 'lucide-react';
import { memo, useCallback } from 'react';

type Props = {
	setOpen: (value: boolean) => void;
};
export default function HelpContent({ setOpen }: Props) {
	const [_dialog, setDialog] = useDialogParams();

	// Memoize the setDialog function to prevent unnecessary re-renders
	const handleClose = useCallback(() => {
		setOpen(false);
	}, [setOpen]);

	const MemoizedButton = memo(({ onClick }: { onClick: () => void }) => (
		<Button type="submit" variant="outline" autoFocus onClick={onClick}>
			Close
		</Button>
	));

	return (
		<DialogContent
			className="sm:max-w-[48rem] max-h-full py-6 px-3 md:px-7"
			// onOpenAutoFocus={(e) => e.preventDefault()}
			aria-describedby="Tutorial on how to play the game"
		>
			<DialogHeader>
				<DialogTitle className="flex flex-row gap-2 items-center text-left">
					<CircleHelpIcon className="h-[1.3rem] w-[1.3rem] transition-all" />
					How to play
				</DialogTitle>
				<DialogDescription className="mt-2 text-left mb-0">Tutorial</DialogDescription>
			</DialogHeader>
			<ScrollArea type="scroll" className="h-[440px]">
				<main className="h-full w-full flex flex-col gap-6 px-2 pb-2 text-wrap break-words ">
					{/* Description section */}
					<blockquote className="sm:leading-7 tracking-wide opacity-90 border-l-[3px] pl-4 mt-1">
						Guess the new Overwatch Perk based on the icon and four possible answers. Try to get the longest streak possible without getting a Perk wrong.
					</blockquote>
					<p>Description work in progress</p>
					{/* Tips section */}
					<div>
						<div className="flex gap-2 items-center first:mt-0 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
							<LightbulbIcon className="opacity-80" />
							<h2 className="">Tips</h2>
						</div>
						<div className="flex flex-col gap-2">
							<p className="scroll-m-20 text-base tracking-normal mt-4">
								To make navigation and playing easier, this website has some hotkeys that can be used:
							</p>
							<HotkeyInfo hotkey="1,2,3,4" label="Select perk (number for can be found on bottom right of card)" />
							<HotkeyInfo hotkey="c" label="Go to next perk" />
							<HotkeyInfo hotkey="r" label="Restart game (also resets streak)" />
							<HotkeyInfo hotkey="ctrl + e" label="Open/close help dialog" />
						</div>
					</div>
					<div>
						<div className="flex gap-2 items-center first:mt-0 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
							<Clapperboard className="opacity-80" />
							<h2 className="">Credits</h2>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-base tracking-normal mt-4">
								All data was sourced through the game itself and{' '}
								<LinkButton href={'https://docs.google.com/spreadsheets/d/1SGHStOwY3fuYuQ8yKwQVmY2YiUzNn_aCaC4VCn_DzEc/edit?gid=0#gid=0'}>
									ObsSojourn's cheatsheet
								</LinkButton>
								. Not affiliated with Blizzard Entertainment.
							</p>
							<div>
								<p className="scroll-m-20 text-base leading-7">Thanks to @Aerux for help with processing the perk icons!</p>
							</div>
							<div>
								<p className="scroll-m-20 text-base leading-7">
									If you like this project, you can{' '}
									<LinkButton type="button" href="" onClick={() => setDialog('feedback')}>
										send feedback/suggestions
									</LinkButton>
									, <LinkButton href={'https://ko-fi.com/scorer5'}>donate</LinkButton> or check out the source code for this project on{' '}
									<LinkButton href={'https://github.com/benschlegel/overwatch-perks'}>Github</LinkButton>.
								</p>
							</div>
						</div>
					</div>
				</main>
			</ScrollArea>
			<DialogFooter>
				<MemoizedButton onClick={handleClose} />
			</DialogFooter>
		</DialogContent>
	);
}
