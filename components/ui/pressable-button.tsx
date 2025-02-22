import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type React from 'react';
import { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean;
	icon?: React.ReactNode;
}

const PressableButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, onClick, icon, asChild = false, ...props }, ref) => {
	return (
		<Button variant="outline" className={cn('px-4 flex gap-2 py-2 transform active:scale-95 transition-transform', className)} onClick={onClick}>
			{children}
			{icon}
		</Button>
	);
});
PressableButton.displayName = 'PressableButton';
export { PressableButton };
