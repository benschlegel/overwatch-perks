'use client';
import { ToastAction } from '@/components/ui/toast';
import useStreakText from '@/hooks/use-streak-text';
import type { PlausibleEvents } from '@/types/plausible';
import { usePlausible } from 'next-plausible';
import React, { useCallback } from 'react';

export default function StreakToastAction() {
	const text = useStreakText();
	const plausible = usePlausible<PlausibleEvents>();

	const onClick = useCallback(() => {
		navigator.clipboard.writeText(text);
		plausible('copyResults', { props: { type: 'toast-button' } });
	}, [text, plausible]);

	return (
		<ToastAction altText="Copy streak" onClick={onClick}>
			Copy
		</ToastAction>
	);
}
