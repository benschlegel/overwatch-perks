import type React from 'react';
import { useState, useEffect } from 'react';

interface BouncyTextProps {
	children: React.ReactNode;
	text: string;
	className?: string;
}

export const BouncyText: React.FC<BouncyTextProps> = ({ children, text, className = '' }) => {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);
	return (
		<span className={`inline-block ${hasMounted ? 'animate-bouncy' : ''} ${className}`} key={text}>
			{children}
		</span>
	);
};
