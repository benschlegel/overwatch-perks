import { CHEATSHEET_SETTINGS } from '@/app/cheatsheet/components/settings-content';
import { useInfoDialogs } from '@/app/cheatsheet/hooks/use-info-dialog';
import { SettingsItem } from '@/components/dialogs/setting-dialog-content';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { HeroId } from '@/data/heroes';
import { SettingsIcon } from 'lucide-react';
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

	const MemoizedButton = memo(({ onClick }: { onClick: () => void }) => (
		<Button type="submit" variant="outline" autoFocus onClick={onClick}>
			Close
		</Button>
	));
	return (
		<DialogContent className="sm:max-w-[36rem] max-h-full py-6 px-3 md:px-7" aria-describedby="Info for perk">
			<DialogHeader>
				<DialogTitle className="flex flex-row gap-2 items-center text-left">
					<SettingsIcon className="h-[1.3rem] w-[1.3rem] transition-all" />
					Settings
				</DialogTitle>
				<DialogDescription className="mt-2 text-left mb-0">Change cheatsheet settings</DialogDescription>
			</DialogHeader>
			<ScrollArea type="scroll" className="h-[25rem]">
				<p>{dialog}</p>
				<p>{heroId}</p>
			</ScrollArea>
			<DialogFooter>
				<MemoizedButton onClick={handleClose} />
			</DialogFooter>
		</DialogContent>
	);
}
