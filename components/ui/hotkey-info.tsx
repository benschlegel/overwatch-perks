type Props = {
	hotkey: string;
	label: string;
};

export default function HotkeyInfo({ hotkey, label }: Props) {
	return (
		<div className="flex items-center gap-6">
			<kbd className="pointer-events-none inline-flex h-5 select-none items-center rounded border bg-muted px-1.5 py-2 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
				<span className="text-xs">{hotkey}</span>
			</kbd>
			<p className="opacity-90 tracking-tight">{label}</p>
		</div>
	);
}
