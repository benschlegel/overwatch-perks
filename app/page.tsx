import Header from '@/components/header';
import GameArea from '@/components/landing-page/game-area';
import Socials from '@/components/socials';

export default function Home() {
	return (
		<div>
			<Socials />
			<Header />
			<GameArea />
		</div>
	);
}
