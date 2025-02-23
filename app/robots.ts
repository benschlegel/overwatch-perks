import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/'],
			disallow: ['/heroes/', '/perks/'],
		},
		sitemap: 'https://perks.owldle.com/sitemap.xml',
	};
}
