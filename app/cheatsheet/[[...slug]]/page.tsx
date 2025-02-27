import { HeroDialog } from '@/app/cheatsheet/components/hero-dialog';
import Link from 'next/link';

export default async function Cheatsheet({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const slug = (await params).slug;
	return (
		<div className="flex flex-col">
			<p>Slug: {slug}</p>

			<HeroDialog />
			<Link href={'/cheatsheet'} prefetch>
				Go to slug (base)
			</Link>
		</div>
	);
}
