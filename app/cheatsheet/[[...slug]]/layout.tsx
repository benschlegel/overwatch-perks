import HeroSelectContextProvider from '@/app/cheatsheet/context/HeroSelectContext';
import ReactQueryProvider from '@/app/cheatsheet/context/ReactQueryProvider';
import { HEROES } from '@/data/heroes';
import Head from 'next/head';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{/* <Head>
				{HEROES.map((h) => (
					<link rel="preload" key={h.id} as="image" href={h.portrait} />
				))}
			</Head> */}
			<ReactQueryProvider>
				<HeroSelectContextProvider>{children}</HeroSelectContextProvider>
			</ReactQueryProvider>
		</>
	);
}
