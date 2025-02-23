'use client';
import SettingsContent from '@/components/dialogs/setting-dialog-content';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { type DialogKey, useDialogState } from '@/hooks/use-dialog-param';
import { SettingsIcon } from 'lucide-react';
import { useCallback, useEffect } from 'react';

const DIALOG_KEY = 'settings' satisfies DialogKey;

export function SettingsDialog() {
	const { open, setOpen } = useDialogState(DIALOG_KEY);

	const toggleDialogOpen = useCallback(() => {
		setOpen(open !== true);
	}, [open, setOpen]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				toggleDialogOpen();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [toggleDialogOpen]);

	return (
		<Dialog open={open} onOpenChange={(val) => (val === true ? setOpen(true) : setOpen(false))}>
			<DialogTrigger asChild>{SettingsTriggerButton}</DialogTrigger>
			<SettingsContent setOpen={setOpen} />
		</Dialog>
	);
}

export const SettingsTriggerButton = (
	<Button variant="ghost" size="icon" className="!p-0" aria-label="Help">
		<SettingsIcon className="!size-[1.2rem] !transition-all" />
		<span className="sr-only">Send feedback</span>
	</Button>
);
