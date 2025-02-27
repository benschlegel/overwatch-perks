import LinkButton from '@/components/ui/link-button';
import { CONFIG } from '@/config';

export default function FooterText() {
	return (
		<div className="p-2 px-2 opacity-60 w-full flex items-center justify-center">
			<p className="text-sm text-muted-foreground text-center">
				If you enjoy Guess the Perk and want to help with server costs or support me, you can help by{' '}
				<LinkButton href={'https://ko-fi.com/scorer5'} className="text-sm  text-muted-foreground text-center !p-0">
					donating.
				</LinkButton>
			</p>
		</div>
	);
}
