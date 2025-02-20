import PlausibleProvider from 'next-plausible';

export default function PlausibleWrapper() {
	return <PlausibleProvider domain="perks.owldle.com" customDomain="https://plausible.global.bschlegel.com" selfHosted={true} trackOutboundLinks />;
}
