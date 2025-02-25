import type React from 'react';
import { useState, useEffect } from 'react';

interface BouncyTextProps {
	children: React.ReactNode;
	className?: string;
}

export const BouncyText: React.FC<BouncyTextProps> = ({ children, className = '' }) => {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);
	return (
		<span className={`inline-block ${hasMounted ? 'animate-bouncy' : ''} ${className}`} key={JSON.stringify(children)}>
			{children}
		</span>
	);
};
