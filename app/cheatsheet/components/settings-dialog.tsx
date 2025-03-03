'use client';
import SettingsContent from '@/app/cheatsheet/components/settings-content';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { type DialogKey, useDialogState } from '@/hooks/use-dialog-param';
import { SettingsIcon } from 'lucide-react';

const DIALOG_KEY = 'settings' satisfies DialogKey;

export function CheatsheetSettingsDialog() {
	const { open, setOpen } = useDialogState(DIALOG_KEY);

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
