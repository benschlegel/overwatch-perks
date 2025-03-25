import HeroSelectContextProvider from '@/app/cheatsheet/context/HeroSelectContext';
import ReactQueryProvider from '@/app/cheatsheet/context/ReactQueryProvider';
import { CONFIG } from '@/config';
import { getHeroName, isValidHeroId, type HeroId } from '@/data/heroes';
import type { Metadata } from 'next';

const DEFAULT_TITLE = 'Perk Cheatsheet';
const DEFAULT_DESCRIPTION = 'A cheatsheet for info on all Overwatch hero perks.';

const OgConfig = {
	ogImagePath: '/opengraph-image-cheatsheet.png?different=true',
	ogImageWidth: 1200,
	ogImageHeight: 630,
};

export async function generateMetadata({ params }: { params: Promise<{ slug: HeroId[] | undefined }> }): Promise<Metadata> {
	const heroIdSlug = (await params).slug;
	let heroId: HeroId | undefined = undefined;
	if (heroIdSlug !== undefined) {
		heroId = heroIdSlug[0];
	}

	const heroName = getHeroName(heroId);

	let urlFull = `${CONFIG.url}/cheatsheet`;
	let titleFull = DEFAULT_TITLE;
	const isValid = heroId !== undefined ? isValidHeroId(heroId) : true;
	if (isValid && heroId !== undefined) {
		urlFull += `/${heroId}`;
		titleFull += ` - ${heroName}`;
	}

	const metadata: Metadata = {
		title: titleFull,
		description: DEFAULT_DESCRIPTION,
		metadataBase: new URL(urlFull),
		alternates: {
			canonical: urlFull,
		},
		openGraph: {
			title: DEFAULT_TITLE,
			description: DEFAULT_DESCRIPTION,
			url: urlFull,
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
			site: urlFull,
			siteId: 'owperks-cheatsheet',
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
		keywords: ['overwatch perks', 'Overwatch', 'overwatch', 'cheatsheet', 'perks', 'guess the perk', 'React', 'Next.js'],
	};

	return metadata;
}

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
