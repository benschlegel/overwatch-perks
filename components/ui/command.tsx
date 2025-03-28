'use client';

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { Dices, Search } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { DialogProps } from '@radix-ui/react-dialog';

const Command = React.forwardRef<React.ElementRef<typeof CommandPrimitive>, React.ComponentPropsWithoutRef<typeof CommandPrimitive>>(
	({ className, ...props }, ref) => (
		<CommandPrimitive
			ref={ref}
			className={cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground', className)}
			{...props}
		/>
	)
);
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {
	srDialogTitle?: string;
	srDialogDescription?: string;
}

const CommandDialog = ({ children, srDialogTitle = 'Command Dialog', srDialogDescription = 'Command opened in Dialog', ...props }: CommandDialogProps) => {
	return (
		<Dialog {...props}>
			<DialogContent className="overflow-hidden p-0 shadow-lg">
				<Command
					className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3"
					loop
					filter={(value, search) => {
						// Manually add filter to fix weird bug where items are unsorted if using built-in filter fn
						// TODO: find better solution than parsing json on every search
						const parsed = JSON.parse(value);
						if (parsed.name.toLowerCase().includes(search.toLowerCase())) return 1;
						return 0;
					}}>
					{children}
				</Command>
				<DialogTitle className="sr-only">{srDialogTitle}</DialogTitle>
				<DialogDescription className="sr-only">{srDialogDescription}</DialogDescription>
			</DialogContent>
		</Dialog>
	);
};

const CommandInput = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>>(
	({ className, ...props }, ref) => (
		<div className="flex items-center border-b px-3" cmdk-input-wrapper="">
			<Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
			<CommandPrimitive.Input
				ref={ref}
				className={cn(
					'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
					className
				)}
				{...props}
			/>
		</div>
	)
);

CommandInput.displayName = CommandPrimitive.Input.displayName;

interface CustomCommandInputProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {
	onButtonClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	isButtonDisabled?: boolean;
	isExpanded?: boolean;
}

const CustomCommandInput = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, CustomCommandInputProps>(
	({ className, onButtonClick, isExpanded = false, isButtonDisabled, ...props }, ref) => (
		<div className="relative flex items-center border-b px-3" cmdk-input-wrapper="">
			<Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
			<CommandPrimitive.Input
				ref={ref}
				className={cn(
					'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-[16px] sm:text-[16px] focus-visible:ring-0! !ring-0 !border-none !outline-none',
					className
				)}
				{...props}
			/>
			<Button
				type="submit"
				variant="secondary"
				size="icon"
				onClick={onButtonClick}
				disabled={isButtonDisabled}
				aria-label="Search"
				className="absolute right-0 top-0 h-full w-auto rounded-none p-2 dark:bg-primary-foreground/75 bg-primary-foreground/90 dark:text-secondary-foreground text-white hover:bg-primary-foreground">
				<div className="flex flex-row gap-2 sm:px-6 px-2">
					<p className="text-lg tracking-tight">Guess</p>
					{/* <div className="flex items-center justify-center">
						<Dices className="h-4 w-4" />
						<span className="sr-only">Search</span>
					</div> */}
				</div>
			</Button>
		</div>
	)
);

CustomCommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<React.ElementRef<typeof CommandPrimitive.List>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>>(
	({ className, ...props }, ref) => <CommandPrimitive.List ref={ref} className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)} {...props} />
);

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>>(
	(props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Group>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>>(
	({ className, ...props }, ref) => (
		<CommandPrimitive.Group
			ref={ref}
			className={cn(
				'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
				className
			)}
			{...props}
		/>
	)
);

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => <CommandPrimitive.Separator ref={ref} className={cn('-mx-1 h-px bg-border', className)} {...props} />);
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Item>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>>(
	({ className, ...props }, ref) => (
		<CommandPrimitive.Item
			ref={ref}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
				className
			)}
			{...props}
		/>
	)
);

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
	return <span className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />;
};
CommandShortcut.displayName = 'CommandShortcut';

export { Command, CommandDialog, CommandInput, CustomCommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator };
