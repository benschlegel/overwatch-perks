'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { useDialogParams } from '@/hooks/use-dialog-param';
import { CircleHelpIcon, SettingsIcon } from 'lucide-react';
import React, { memo, useCallback } from 'react';
type Props = {
	setOpen: (value: boolean) => void;
};

export default function SettingsContent({ setOpen }: Props) {
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
			className="sm:max-w-[40rem] max-h-full py-6 px-3 md:px-7"
			// onOpenAutoFocus={(e) => e.preventDefault()}
			aria-describedby="Tutorial on how to play the game"
		>
			<DialogHeader>
				<DialogTitle className="flex flex-row gap-2 items-center text-left">
					<SettingsIcon className="h-[1.3rem] w-[1.3rem] transition-all" />
					Settings
				</DialogTitle>
				<DialogDescription className="mt-2 text-left mb-0">Change game settings</DialogDescription>
			</DialogHeader>
			<ScrollArea type="scroll" className="h-[350px] grid gap-6">
				<div className="flex items-center justify-between space-x-2">
					<Label htmlFor="necessary" className="flex flex-col space-y-1">
						<span>Strictly Necessary</span>
						<span className="font-normal leading-snug text-muted-foreground">
							These cookies are essential in order to use the website and use its features.
						</span>
					</Label>
					<Switch id="necessary" defaultChecked />
				</div>
				<div className="flex items-center justify-between space-x-2">
					<Label htmlFor="functional" className="flex flex-col space-y-1">
						<span>Functional Cookies</span>
						<span className="font-normal leading-snug text-muted-foreground">These cookies allow the website to provide personalized functionality.</span>
					</Label>
					<Switch id="functional" />
				</div>
				<div className="flex items-center justify-between space-x-2">
					<Label htmlFor="performance" className="flex flex-col space-y-1">
						<span>Performance Cookies</span>
						<span className="font-normal leading-snug text-muted-foreground">These cookies help to improve the performance of the website.</span>
					</Label>
					<Switch id="performance" />
				</div>
			</ScrollArea>
			<DialogFooter>
				<MemoizedButton onClick={handleClose} />
			</DialogFooter>
		</DialogContent>
	);
}
