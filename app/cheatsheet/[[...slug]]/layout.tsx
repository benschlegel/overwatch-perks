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
			{children}
		</>
	);
}
