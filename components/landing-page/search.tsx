'use client';

import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, CustomCommandInput } from '@/components/ui/command';
import { PERKS, type Perk } from '@/data/perks';
import { cn } from '@/lib/utils';
import { UserIcon } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

type SearchState = 'unfocused' | 'typing' | 'submitting';

export default function PlayerSearch({ className }: Props) {
	const [selectedPerk, setSelectedPerk] = useState<Perk | undefined>();
	const [searchState, setSearchState] = useState<SearchState>('unfocused');
	const [searchValue, setSearchValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const closeSearch = useCallback(() => {
		// TODO: find better workaround
		setTimeout(() => {
			setSearchState('unfocused');
		}, 150);
	}, []);

	// Called when player is selected
	const handleSubmit = useCallback(() => {
		if (selectedPerk !== undefined) {
			// Handle submit
			console.log(`Submitted: ${selectedPerk.name}`);

			// Reset search state
			setSearchState('unfocused');
			setSearchValue('');
			setSelectedPerk(undefined);
		}
	}, [selectedPerk]);

	// Called when item is selected from dropdown (through click or enter)
	const handleItemSubmit = useCallback(
		(e: string) => {
			if (searchState !== 'unfocused') {
				const perk: Perk = JSON.parse(e);
				setSearchValue(perk.name);
				setSelectedPerk(JSON.parse(e));
				setSearchState('submitting');
			}
		},
		[searchState]
	);

	const filterSearch = useCallback((value: string, search: string, keywords?: string[]) => {
		// Manually add filter to fix weird bug where items are unsorted if using built-in filter fn
		// TODO: find better solution than parsing json on every search
		const parsed = JSON.parse(value) as Perk;
		if (parsed.name.toLowerCase().includes(search.toLowerCase())) return 1;
		return 0;
	}, []);

	const handleTyping = (e: React.FormEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value);
		setSearchState('typing');
		setSelectedPerk(undefined);
	};

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			// Focus search on ctrl + y
			if (e.key === 'y' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				inputRef.current?.focus();
			}
		};

		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	return (
		<Command
			loop
			className={cn('rounded-lg border border-secondary shadow-xs md:min-w-[450px] mb-4 transition-colors duration-300 ', className)}
			onBlur={closeSearch}
			filter={filterSearch}>
			<CustomCommandInput
				onButtonClick={handleSubmit}
				placeholder="Search for perk..."
				value={searchValue}
				onChangeCapture={handleTyping}
				onFocus={() => setSearchState('typing')}
				onClick={() => setSearchState('typing')}
				ref={inputRef}
				onKeyDownCapture={(event) => {
					if (event.key === 'Enter') {
						if (searchState === 'submitting') {
							handleSubmit();
						}
					} else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
						setSearchState('typing');
					}
				}}
				isButtonDisabled={selectedPerk === undefined}
			/>
			<CommandList className={`${searchState === 'typing' ? '' : 'hidden'} max-h-[200px] h-(--cmdk-list-height) transition-[height] duration-200`}>
				{/* <ScrollArea className="sm:h-[10rem] h-[15rem]"> */}
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="">
					{PERKS.map((perk) => {
						return (
							<CommandItem
								value={JSON.stringify(perk)}
								key={`${perk.name}-${perk.id}`}
								onSelect={handleItemSubmit}
								className="text-[16px] sm:text-[16px] sm:py-[0.43rem]">
								<UserIcon className="mr-2 h-4 w-4" />
								<span>{perk.name}</span>
							</CommandItem>
						);
					})}
				</CommandGroup>
				{/* </ScrollArea> */}
			</CommandList>
		</Command>
	);
}
