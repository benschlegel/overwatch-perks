'use client';

import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, CustomCommandInput } from '@/components/ui/command';
import { useGameScore } from '@/context/GameScoreContext';
import { PERKS, type Perk } from '@/data/perks';
import useCompactSettings from '@/hooks/use-compact-settings';
import useGameState from '@/hooks/use-game-state';
import { useSetting } from '@/hooks/use-settings-param';
import { cn } from '@/lib/utils';
import { API_URL, type GameResult } from '@/types/database';
import type { PlausibleEvents } from '@/types/plausible';
import { Gamepad2Icon, UserIcon } from 'lucide-react';
import { usePlausible } from 'next-plausible';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

type SearchState = 'unfocused' | 'typing' | 'submitting';

const apiRoute = process.env.NEXT_PUBLIC_API_URL ?? '';

export default function PlayerSearch({ className }: Props) {
	const [selectedPerk, setSelectedPerk] = useState<Perk | undefined>();
	const [searchState, setSearchState] = useState<SearchState>('unfocused');
	const [searchValue, setSearchValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);
	const { gameState, setGameState, currPerk } = useGameState();
	const { incrementCurrent, resetCurrent } = useGameScore();
	const plausible = usePlausible<PlausibleEvents>();
	const settings = useCompactSettings();

	const closeSearch = useCallback(() => {
		// TODO: find better workaround
		setTimeout(() => {
			setSearchState('unfocused');
		}, 150);
	}, []);

	const logGame = useCallback(
		async (isCorrect: boolean, perk: Perk) => {
			// Logging
			const gameResult = isCorrect ? 'won' : 'lost';
			plausible('finishGame', { props: { result: isCorrect ? 'correct' : 'incorrect' } });
			const loggedGame: GameResult = {
				gameResult,
				guessedPerk: perk.id,
				perkId: currPerk?.id ?? -1,
				settings,
			};
			await fetch(`${apiRoute}/api/save`, {
				method: 'POST',
				body: JSON.stringify(loggedGame),
				headers: {
					'Content-Type': 'application/json',
				},
			});
		},
		[plausible, settings, currPerk?.id]
	);

	const handleFinishGame = useCallback(
		async (perk: Perk) => {
			if (gameState === 'in-progress' || gameState === 'starting') {
				// Update game/card state
				const isCorrect = selectedPerk?.id === currPerk?.id;
				const gameResult = isCorrect ? 'won' : 'lost';
				setGameState(gameResult);
				if (!isCorrect) {
					resetCurrent();
				} else {
					incrementCurrent();
				}
				await logGame(isCorrect, perk);
			}
		},
		[setGameState, gameState, incrementCurrent, resetCurrent, currPerk?.id, selectedPerk?.id, logGame]
	);

	// Called when player is selected
	const handleSubmit = useCallback(() => {
		if (selectedPerk !== undefined) {
			handleFinishGame(selectedPerk);

			// Reset search state
			setSearchState('unfocused');
			setSearchValue('');
			setSelectedPerk(undefined);
		}
	}, [selectedPerk, handleFinishGame]);

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
				disabled={gameState === 'lost' || gameState === 'won'}
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
								<Gamepad2Icon className="mr-2 h-4 w-4" />
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
