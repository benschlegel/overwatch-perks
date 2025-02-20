import Header from '@/components/header';
import GameArea from '@/components/landing-page/game-area';
import Socials from '@/components/socials';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Socials />
			<Header />
			<GameArea />
		</div>
	);
}
