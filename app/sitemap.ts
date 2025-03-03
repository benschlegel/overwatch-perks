import { HEROES } from '@/data/heroes';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	yesterday.setHours(2);
	yesterday.setMinutes(0);
	yesterday.setSeconds(0);
	const sites: MetadataRoute.Sitemap = [
		{
			url: 'https://perks.owldle.com/',
			lastModified: yesterday,
			changeFrequency: 'always',
			priority: 1,
		},
		{
			url: 'https://perks.owldle.com/cheatsheet',
			lastModified: yesterday,
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://perks.owldle.com/cheatsheet',
			lastModified: yesterday,
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://perks.owldle.com?hardMode=6',
			lastModified: yesterday,
			changeFrequency: 'always',
			priority: 0.8,
		},
		{
			url: 'https://perks.owldle.com?randomAnswers=true',
			lastModified: yesterday,
			changeFrequency: 'always',
			priority: 0.8,
		},
		{
			url: 'https://perks.owldle.com?randomAnswers=true',
			lastModified: yesterday,
			changeFrequency: 'always',
			priority: 0.8,
		},
		{
			url: 'https://perks.owldle.com?dialog=help',
			lastModified: yesterday,
			changeFrequency: 'monthly',
			priority: 1,
		},
	];

	for (const hero of HEROES) {
		sites.push({
			url: `https://perks.owldle.com/cheatsheet/${hero.id}`,
			lastModified: yesterday,
			changeFrequency: 'weekly',
			priority: 0.95,
		});
	}

	return sites;
}
