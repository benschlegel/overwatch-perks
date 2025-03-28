import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export async function GET() {
	const fontData = await fetch(new URL('../../fonts/OWLFontBold.woff', import.meta.url)).then((res) => res.arrayBuffer());
	return new ImageResponse(
		<div
			style={{
				height: '100%',
				// Full-size: 200
				fontSize: 175,
				color: '#f06216',
				background: '#1a1a1e',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				borderRadius: '10px',
				justifyContent: 'center',
			}}>
			<div style={{ display: 'flex', marginTop: -40 }}>
				<div style={{ display: 'flex' }}>Ow</div>
				<div style={{ display: 'flex', color: '#dfdfd6' }}>Perks</div>
			</div>
			{/* Default font size:  */}
			<div style={{ display: 'flex', fontSize: 36, marginTop: 20, color: '#dfdfd6' }}>Guess the perk and reach the longest streak you can</div>
		</div>,
		{
			width: 1200,
			// Full size: 630
			height: 630,
			fonts: [
				{
					name: 'OWLFontBold',
					data: fontData,
					style: 'normal',
				},
			],
		}
	);
}
