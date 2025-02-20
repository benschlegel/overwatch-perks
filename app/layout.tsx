import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Suspense } from 'react';
import PlausibleWrapper from '@/context/PlausibleWrapper';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

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

export const metadata: Metadata = {
	title: 'Guess the Perk',
	description: 'Guess the overwatch perk based on its icon to build better muscle memory',
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
				{/* Add your own plausible config (if you want to set up analytics) */}
				<Suspense>
					<PlausibleWrapper />
				</Suspense>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<NuqsAdapter>
						<div className="px-2 pt-8 sm:px-4 lg:px-8 w-full h-full flex justify-center items-center">
							<main className="w-[40rem]">{children}</main>
						</div>
						<Toaster />
					</NuqsAdapter>
				</ThemeProvider>
			</body>
		</html>
	);
}
