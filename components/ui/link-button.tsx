import { EnhancedButton } from '@/components/ui/enhanced-button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { HtmlHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
	href: string;
	type?: 'Link' | 'a' | 'button';
	onClick?: () => void;
}

const className: React.ComponentProps<'a'>['className'] =
	'text-base tracking-normal rounded-lg px-[0.1rem] py-[0.1rem] focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-primary-foreground focus-visible:ring-offset-1 p-0!';

export default function LinkButton({ children, href, type = 'a', onClick, className: passedClassName }: PropsWithChildren<Props>) {
	return (
		<EnhancedButton variant={'linkHover1'} tabIndex={-1} onClick={onClick} className={cn(passedClassName, className)}>
			{type === 'Link' ? (
				<Link href={href} className={cn(className, passedClassName)}>
					{children}
				</Link>
			) : type === 'a' ? (
				<a href={href} className={cn(className, passedClassName)} target="_blank" rel="noreferrer">
					{children}
				</a>
			) : (
				<div className={cn(className, passedClassName)}>{children}</div>
			)}
		</EnhancedButton>
	);
}
