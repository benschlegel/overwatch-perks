import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	yesterday.setHours(2);
	yesterday.setMinutes(0);
	yesterday.setSeconds(0);
	return [
		{
			url: 'https://perks.owldle.com/',
			lastModified: yesterday,
			changeFrequency: 'always',
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
}
