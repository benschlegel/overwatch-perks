import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Suspense } from 'react';
import PlausibleWrapper from '@/context/PlausibleWrapper';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import PerkContextProvider from '@/context/PerkContext';
import GameStateContextProvider from '@/context/GameStateContext';
import GameScoreContextProvider from '@/context/GameScoreContext';
import { PERKS } from '@/data/perks';
import { CONFIG } from '@/config';
import CurrentBestContextProvider from '@/context/CurrentBestContext';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

const owlHeader = localFont({
	src: './fonts/OWLFontBold.woff',
	variable: '--font-owl-bold',
	display: 'swap',
	adjustFontFallback: false,
	weight: '700',
});

export const OgConfig = {
	ogImagePath: '/opengraph-image.png?new=true',
	ogImageWidth: 1200,
	ogImageHeight: 630,
};

export const DEFAULT_TITLE = 'Guess the Perk';
export const DEFAULT_DESCRIPTION = 'Guess the overwatch perk and reach the longest streak you can';

export const metadata: Metadata = {
	title: 'Guess the Perk',
	description: 'Guess the overwatch perk and reach the longest streak possible',
	metadataBase: new URL(CONFIG.url),
	openGraph: {
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION,
		url: CONFIG.url,
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
		siteName: 'owperks',
	},
	twitter: {
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION,
		site: CONFIG.url,
		siteId: 'owperks',
		images: [
			{
				url: `https://perks.owldle.com${OgConfig.ogImagePath}`,
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
	keywords: ['owperks', 'overwatch perks', 'Overwatch', 'overwatch', 'perks', 'guess the perk', 'minigame', 'queue game', 'difficult'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="twitter:card" content="summary_large_image" />
				{PERKS.map((p) => (
					<link rel="preload" key={p.id} as="image" href={`/assets/perks/${p.heroId}_${p.perkType}_${p.perkIndex}.png`} />
				))}
				{/* Add your own plausible config (if you want to set up analytics) */}
				<Suspense>
					<PlausibleWrapper />
				</Suspense>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<NuqsAdapter>
						<PerkContextProvider>
							<GameStateContextProvider>
								<CurrentBestContextProvider>
									<GameScoreContextProvider>
										<div className="px-2 pt-8 sm:px-4 lg:px-8 w-full h-full flex justify-center items-center">
											<main className="w-[40rem]">{children}</main>
										</div>
										<Toaster />
									</GameScoreContextProvider>
								</CurrentBestContextProvider>
							</GameStateContextProvider>
						</PerkContextProvider>
					</NuqsAdapter>
				</ThemeProvider>
			</body>
		</html>
	);
}
