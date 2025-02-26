'use client';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import useGameState from '@/hooks/use-game-state';
import { useSetting } from '@/hooks/use-settings-param';
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
		<DialogContent className="sm:max-w-[36rem] max-h-full py-6 px-3 md:px-7" aria-describedby="Tutorial on how to play the game">
			<DialogHeader>
				<DialogTitle className="flex flex-row gap-2 items-center text-left">
					<SettingsIcon className="h-[1.3rem] w-[1.3rem] transition-all" />
					Settings
				</DialogTitle>
				<DialogDescription className="mt-2 text-left mb-0">Change game settings</DialogDescription>
			</DialogHeader>
			<ScrollArea type="scroll" className="h-[350px]">
				<div className="flex flex-col gap-5">
					<blockquote className="opacity-90 border-l-[3px] font-mono font-sm border-primary-foreground pl-4 mt-1">
						<span className="font-bold">Warning</span>: changing settings resets streak.
					</blockquote>
					{SETTINGS.map((s) => (
						<SettingsItem key={s.settingId} description={s.description} name={s.name} settingId={s.settingId} defaultChecked={s.defaultChecked} />
					))}
				</div>
			</ScrollArea>
			<DialogFooter>
				<MemoizedButton onClick={handleClose} />
			</DialogFooter>
		</DialogContent>
	);
}

export const settingNames = ['hardMode', 'debug', 'showHero', 'randomAnswers', 'showDescription', 'inverse'] as const;
export type SettingName = (typeof settingNames)[number];

type SettingItem = {
	name: string;
	description: string;
	defaultChecked?: boolean;
	disabled?: boolean;
	settingId: SettingName;
};

export const SETTINGS: SettingItem[] = [
	{ name: 'Show Hero', description: 'Show hero icon and name while guessing.', settingId: 'showHero', defaultChecked: true },
	{ name: 'Show Description', description: 'Show perk description on each answer option.', settingId: 'showDescription', defaultChecked: true },
	{ name: 'Inverse mode', description: 'Guess the perk given its name and four possible icons (inverse of default).', settingId: 'inverse' },
	{
		name: 'Random Answers',
		description: 'When enabled, answers will be from random perks instead of showing all hero perks.',
		settingId: 'randomAnswers',
		disabled: true,
	},
	{ name: 'Hard Mode', description: 'Guess perks by providing the exact name instead of choosing from four options.', settingId: 'hardMode' },
	{ name: 'Debug Mode', description: 'Show perk id and other information useful for debugging and feedback.', settingId: 'debug' },
];

export function SettingsItem({ name, description, settingId, defaultChecked, disabled }: SettingItem) {
	const [enabled, setEnabled] = useSetting(settingId);
	const { restartGame } = useGameState();

	const onClick = useCallback(
		(checked: boolean) => {
			setEnabled(checked);
			if (settingId !== 'debug') {
				restartGame();
			}
		},
		[setEnabled, restartGame, settingId]
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
