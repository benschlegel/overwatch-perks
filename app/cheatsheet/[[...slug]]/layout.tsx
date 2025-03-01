import HeroSelectContextProvider from '@/app/cheatsheet/context/HeroSelectContext';
import ReactQueryProvider from '@/app/cheatsheet/context/ReactQueryProvider';
import { CONFIG } from '@/config';
import type { Metadata } from 'next';

const DEFAULT_TITLE = 'Perk Cheatsheet';
const DEFAULT_DESCRIPTION = 'A cheatsheet for info on all Overwatch hero perks.';

const OgConfig = {
	ogImagePath: '/opengraph-image-cheatsheet.png?different=true',
	ogImageWidth: 1200,
	ogImageHeight: 630,
};

export const metadata: Metadata = {
	title: DEFAULT_TITLE,
	description: DEFAULT_DESCRIPTION,
	metadataBase: new URL(`${CONFIG.url}/cheatsheet`),
	openGraph: {
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION,
		url: `${CONFIG.url}/cheatsheet`,
		images: [
			{
				url: OgConfig.ogImagePath,
				alt: DEFAULT_TITLE,
				width: OgConfig.ogImageWidth,
				height: OgConfig.ogImageHeight,
				type: 'image/png',
			},
		],
		type: 'website',
		siteName: DEFAULT_TITLE,
	},
	twitter: {
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION,
		site: `${CONFIG.url}/cheatsheet`,
		siteId: 'owperks-cheatsheet',
		images: [
			{
				url: `https://perks.owldle.com/cheatsheet${OgConfig.ogImagePath}`,
				alt: DEFAULT_TITLE,
				width: OgConfig.ogImageWidth,
				height: OgConfig.ogImageHeight,
				type: 'image/png',
			},
		],
		card: 'summary_large_image',
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-snippet': -1,
		},
	},
	keywords: ['overwatch perks', 'Overwatch', 'overwatch', 'cheatsheet', 'perks', 'guess the perk'],
};

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
