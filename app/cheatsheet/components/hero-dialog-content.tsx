'use client';
import RoleImages from '@/app/cheatsheet/components/role-images';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { HeroRole } from '@/data/heroes';
import { Gamepad2Icon } from 'lucide-react';
import { memo, useCallback } from 'react';

type Props = {
	setOpen: (value: boolean) => void;
};

const ROLES: HeroRole[] = ['tank', 'damage', 'support'] as const;

export default function HeroDialogContent({ setOpen }: Props) {
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
		<DialogContent className="sm:max-w-[80%] max-h-full py-6 px-3 md:px-7" aria-describedby="Hero/perk selection">
			<DialogHeader>
				<DialogTitle className="flex flex-row gap-2 items-center text-left">
					<Gamepad2Icon className="h-[1.3rem] w-[1.3rem] transition-all" />
					Select hero
				</DialogTitle>
				<DialogDescription className="mt-2 text-left mb-0">Select hero to see perks</DialogDescription>
			</DialogHeader>
			<ScrollArea type="scroll" className="h-[45rem]">
				{ROLES.map((role) => (
					<RoleImages role={role} key={`roles-${role}`} />
				))}
				<div className="mb-7" />
			</ScrollArea>
			<DialogFooter>
				<MemoizedButton onClick={handleClose} />
			</DialogFooter>
		</DialogContent>
	);
}
