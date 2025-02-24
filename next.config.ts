import { withPlausibleProxy } from 'next-plausible';

const nextConfig = withPlausibleProxy({ customDomain: 'https://plausible.global.bschlegel.com' })({
	images: {
		// TODO: remove to disable nextjs image optimizations/caching
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'd15f34w2p8l1cc.cloudfront.net',
				port: '',
				pathname: '/overwatch/**',
			},
		],
		formats: ['image/avif'],
		unoptimized: true,
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	experimental: {
		reactCompiler: true,
		// instrumentationHook: true,
	},
});

export default nextConfig;
