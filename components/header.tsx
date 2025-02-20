import { ModeToggle } from '@/components/landing-page/theme-switcher';
import { Separator } from '@/components/ui/separator';

export default function Header() {
	return (
		<div className="sticky sm:static top-0 bg-background sm:bg-inherit z-10 pt-[0.5rem] w-full">
			<div className="flex flex-row justify-between items-center w-full">
				<div className="mb-1 flex items-center">
					{/* <div className="absolute left-1/2 transform -translate-x-1/2 text-center"> */}
					<h1
						className="sm:text-4xl text-3xl font-bold text-center sm:ml-[-1rem]"
						style={{
							fontFamily: 'var(--font-owl-bold), ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
						}}>
						OW<span className="text-primary-foreground">PERKS</span>
					</h1>
				</div>
				<div className="flex gap-1">
					{/* <Suspense fallback={FeedbackTriggerButton}>
						<FeedbackDialog />
					</Suspense> */}
					<ModeToggle />
				</div>
			</div>
			<Separator className="mb-6 mt-1 transition-colors duration-300" />
		</div>
	);
}
