'use client';
import { useCheatsheetSetting } from '@/app/cheatsheet/hooks/use-settings-param';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { SettingsIcon } from 'lucide-react';
import React, { memo, useCallback } from 'react';
type Props = {
	setOpen: (value: boolean) => void;
};

export default function SettingsContent({ setOpen }: Props) {
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
		<DialogContent className="sm:max-w-[36rem] max-h-full py-6 px-3 md:px-7" aria-describedby="Settings for the cheatsheet">
			<DialogHeader>
				<DialogTitle className="flex flex-row gap-2 items-center text-left">
					<SettingsIcon className="h-[1.3rem] w-[1.3rem] transition-all" />
					Settings
				</DialogTitle>
				<DialogDescription className="mt-2 text-left mb-0">Change cheatsheet settings</DialogDescription>
			</DialogHeader>
			{/* <ScrollArea type="scroll" className="h-[350px]">
				<div className="flex flex-col gap-5">
					{CHEATSHEET_SETTINGS.map((s) => (
						<SettingsItem key={s.settingId} description={s.description} name={s.name} settingId={s.settingId} defaultChecked={s.defaultChecked} />
					))}
				</div>
			</ScrollArea> */}
			<p>Work in progress.</p>
			<DialogFooter>
				<MemoizedButton onClick={handleClose} />
			</DialogFooter>
		</DialogContent>
	);
}

export const settingNames = ['showFooter'] as const;
export type CheatsheetSettingName = (typeof settingNames)[number];

type SettingItem = {
	name: string;
	description: string;
	defaultChecked?: boolean;
	disabled?: boolean;
	settingId: CheatsheetSettingName;
};

export const CHEATSHEET_SETTINGS: SettingItem[] = [
	{ name: 'Show Card Footer', description: 'Shows footer containing info like minor/major perk.', settingId: 'showFooter', defaultChecked: true },
];

export function SettingsItem({ name, description, settingId, defaultChecked, disabled }: SettingItem) {
	const [enabled, setEnabled] = useCheatsheetSetting(settingId);

	const onClick = useCallback(
		(checked: boolean) => {
			setEnabled(checked);
		},
		[setEnabled]
	);

	return (
		<div className="flex items-center justify-between space-x-4 mr-1">
			<Label htmlFor={settingId} className="flex flex-col space-y-1 w-full">
				<span>{name}</span>
				<span className="font-normal leading-snug text-muted-foreground">{description}</span>
			</Label>
			<Switch defaultChecked={defaultChecked} checked={enabled} onCheckedChange={onClick} disabled={disabled} />
		</div>
	);
}
