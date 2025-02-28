import ChangeHeroButton from '@/app/cheatsheet/components/change-hero-button';
import ShareButton from '@/app/cheatsheet/components/share-button';

export default function ControlsRow() {
	return (
		<div className="flex items-center justify-between w-full">
			<ShareButton />
			<ChangeHeroButton />
		</div>
	);
}
