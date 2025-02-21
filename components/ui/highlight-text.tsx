import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	text: string;
}

export default function HighlightText({ text, children, className, ...props }: Props) {
	// regex to match both standalone numbers and numbers followed by %
	const parts = text.split(/(\d+%?)/);

	return (
		<p>
			{parts.map((part, index) => {
				// Check if this part is a number or number with % symbol
				return /^\d+%?$/.test(part) ? (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<span key={index} className={cn('text-primary-foreground', className)}>
						{part}
					</span>
				) : (
					part
				);
			})}
		</p>
	);
}
