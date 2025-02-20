import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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
						Guess the correct Overwatch League player within 8 attempts to win (inspired by wordle). After each guess, you will receive hints based on
						attributes like the player's role, team, region and nationality to help you get closer to the right answer.
					</blockquote>

					{/* Tips section */}
					<div>
						<div className="flex gap-2 items-center first:mt-0 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
							<LightbulbIcon className="opacity-80" />
							<h2 className="">Tips</h2>
						</div>
						<div className="flex flex-col gap-2">
							<p className="scroll-m-20 text-base tracking-normal mt-4">
								Most elements on this website have tooltips, so when you need more info, try hovering it (or pressing on mobile). The website also has some
								hotkeys:
							</p>
							<div className="flex items-center gap-6 mt-1">
								<kbd className="pointer-events-none inline-flex h-5 select-none items-center rounded border bg-muted px-1.5 py-2 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
									<span className="text-xs">ctrl + y</span>
								</kbd>
								<p className="opacity-90 tracking-tight">Jump to search input</p>
							</div>
							<div className="flex items-center gap-6">
								<kbd className="pointer-events-none inline-flex h-5 select-none items-center rounded border bg-muted px-1.5 py-2 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
									<span className="text-xs">ctrl + k</span>
								</kbd>
								<p className="opacity-90 tracking-tight">Open search in popup dialog</p>
							</div>
							<div className="flex items-center gap-6">
								<kbd className="pointer-events-none inline-flex h-5 select-none items-center rounded border bg-muted px-1.5 py-2 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
									<span className="text-xs">ctrl + e</span>
								</kbd>
								<p className="opacity-90 tracking-tight">Open/close help dialog</p>
							</div>
						</div>
					</div>
					<div>
						<div className="flex gap-2 items-center first:mt-0 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
							<Clapperboard className="opacity-80" />
							<h2 className="">Credits</h2>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-base tracking-normal mt-4">
								All player data was sourced through <LinkButton href={'https://liquipedia.net/overwatch/Overwatch_League'}>Liquipedia</LinkButton>. Not
								affiliated with Blizzard Entertainment.
							</p>
							<div>
								<p className="scroll-m-20 text-base leading-7">
									If you like this project, you can{' '}
									<LinkButton type="button" href="" onClick={() => setDialog('feedback')}>
										send feedback/suggestions
									</LinkButton>
									, <LinkButton href={'https://ko-fi.com/scorer5'}>buy me a coffee</LinkButton> or check out the source code for this project on{' '}
									<LinkButton href={'https://github.com/benschlegel/OWLDLE'}>Github</LinkButton>.
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
