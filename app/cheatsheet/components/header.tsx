import { HelpDialog, HelpTriggerButton } from '@/app/cheatsheet/components/help-dialog';
import { CheatsheetSettingsDialog, SettingsTriggerButton } from '@/app/cheatsheet/components/settings-dialog';
import { FeedbackDialog, FeedbackTriggerButton } from '@/components/dialogs/feedback-dialog';
import { ModeToggle } from '@/components/landing-page/theme-switcher';
import { Separator } from '@/components/ui/separator';
import { Suspense } from 'react';

export default function Header() {
	return (
		<div className="sticky sm:static top-0 bg-background sm:bg-inherit z-10 pt-[0.5rem] w-full">
			<div className="flex flex-row justify-between items-center w-full">
				<div className="flex gap-2 items-center">
					<Suspense fallback={HelpTriggerButton}>
						<HelpDialog />
					</Suspense>
					<Suspense fallback={FeedbackTriggerButton}>
						<FeedbackDialog />
					</Suspense>
					{/* <SeasonSelector /> */}
				</div>
				<div className="mb-1 flex items-center">
					{/* <div className="absolute left-1/2 transform -translate-x-1/2 text-center"> */}
					<h1
						className="sm:text-4xl text-3xl font-bold text-center sm:ml-[-1rem]"
						style={{
							fontFamily: 'var(--font-owl-bold), ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
						}}>
						{/* Jank to fix mobile display */}
						<span className="sm:block hidden">
							<span className="text-primary-foreground">PERK</span>CHEATSHEET
						</span>
						<span className="sm:hidden block tracking-base text-2xl">
							<span className="text-primary-foreground">CHEATSHEET</span>
						</span>
					</h1>
				</div>
				<div className="flex gap-1">
					<Suspense fallback={SettingsTriggerButton}>
						<CheatsheetSettingsDialog />
					</Suspense>
					<ModeToggle />
				</div>
			</div>
			<Separator className="sm:mb-6 mb-3 mt-1 transition-colors duration-300" />
		</div>
	);
}
