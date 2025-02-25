import { Button } from '@/components/ui/button';
import { SwitchableButton } from '@/components/ui/switchable-button';
import useStreakText from '@/hooks/use-streak-text';
import type { PlausibleEvents } from '@/types/plausible';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { usePlausible } from 'next-plausible';
import { useCallback } from 'react';

export default function CopyStreakButton() {
	const text = useStreakText();
	const plausible = usePlausible<PlausibleEvents>();

	const onClick = useCallback(() => {
		navigator.clipboard.writeText(text);
		plausible('copyResults', { props: { type: 'footer-button' } });
	}, [text, plausible]);

	return (
		<SwitchableButton className="max-w-[7.5rem] box-border" onClick={onClick} switchedContent={<SwitchedButtonContent />}>
			<DefaultButtonContent />
		</SwitchableButton>
	);
}
function DefaultButtonContent() {
	return (
		<div className="flex flex-row gap-2">
			<p className="text-md font-semibold tracking-tight">Copy streak</p>
			<div className="flex items-center justify-center">
				<CopyIcon className="h-4 w-4" />
				<span className="sr-only">Copy streak</span>
			</div>
		</div>
	);
}

function SwitchedButtonContent() {
	return (
		<div className="flex flex-row justify-center items-center gap-1">
			<p className="text-md font-semibold tracking-tight">Copied!</p>
			<CheckIcon className="w-16 h-16 dark:text-[#dfdfd7] text-white" />
		</div>
	);
}
