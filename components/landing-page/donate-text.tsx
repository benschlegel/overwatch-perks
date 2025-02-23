import LinkButton from '@/components/ui/link-button';

export default function DonateText() {
	return (
		<div className="p-2 px-4 opacity-60 w-full flex items-center justify-center">
			<p className="text-sm text-muted-foreground text-center">
				If you enjoy the game and want to help with server costs or support me, you can do so{' '}
				<LinkButton href={'https://ko-fi.com/scorer5'} className="text-sm  text-muted-foreground text-center !p-0">
					here
				</LinkButton>
				.
			</p>
		</div>
	);
}
