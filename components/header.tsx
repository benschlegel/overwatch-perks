import { FeedbackDialog, FeedbackTriggerButton } from '@/components/dialogs/feedback-dialog';
import { HelpDialog, HelpTriggerButton } from '@/components/dialogs/help-dialog';
import { SettingsDialog, SettingsTriggerButton } from '@/components/dialogs/settings-dialog';
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
					{/* <SeasonSelector /> */}
					<Suspense fallback={FeedbackTriggerButton}>
						<FeedbackDialog />
					</Suspense>
				</div>
				<div className="mb-1 flex items-center">
					{/* <div className="absolute left-1/2 transform -translate-x-1/2 text-center"> */}
					<h1
						className="sm:text-4xl text-3xl font-bold text-center sm:ml-[-1rem]"
						style={{
							fontFamily: 'var(--font-owl-bold), ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
						}}>
						<span className="text-primary-foreground">OW</span>PERKS
					</h1>
				</div>
				<div className="flex gap-1">
					<Suspense fallback={SettingsTriggerButton}>
						<SettingsDialog />
					</Suspense>
					<ModeToggle />
				</div>
			</div>
			<Separator className="sm:mb-6 mb-3 mt-1 transition-colors duration-300" />
		</div>
	);
}
