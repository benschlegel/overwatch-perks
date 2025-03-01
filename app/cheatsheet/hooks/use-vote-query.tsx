import { fetchVotes, submitVote } from '@/app/cheatsheet/lib/queries';
import type { HeroId } from '@/data/heroes';
import type { Perk, PerkType } from '@/data/perks';
import type { VoteResponse } from '@/types/database';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// TODO: refactor to use functions instead of const () => {}

export const useVotes = (heroId: HeroId) => {
	return useQuery({
		queryKey: ['votes', heroId], // Cache votes per heroId
		queryFn: () => fetchVotes(heroId),
		enabled: !!heroId, // Fetch only if heroId exists
		staleTime: 30000, // Keep data fresh for 30s
		refetchInterval: 30000, // Auto-refresh every 30s
	});
};

function formatNumber(num: number, digits = 2) {
	const fixed = num.toFixed(digits);

	// If it ends with decimal point followed by all zeros, truncate
	if (fixed.indexOf('.') !== -1) {
		return Number.parseFloat(fixed).toString();
	}

	return fixed;
}

export function usePerkVotes(heroId: HeroId, perk?: Perk, percentageDigits = 1) {
	const { data } = useVotes(heroId);
	if (data && perk) {
		const perksByType = perk.perkType === 'minor' ? [data[0], data[1]] : [data[2], data[3]];
		const totalHeroVotes = data.reduce((partialCount, curr) => partialCount + curr.votes, 0);
		const totalTypeVotes = perksByType.reduce((partialCount, curr) => partialCount + curr.votes, 0);
		const currVotes = data.find((d) => d.id === perk?.id)?.votes;

		let votePercentageFormatted = '0';
		if (totalTypeVotes !== 0) {
			console.log('Curr votes: ');
			const votePercentage = (currVotes ?? 0) / totalTypeVotes;
			votePercentageFormatted = formatNumber(votePercentage * 100, percentageDigits);
		}

		return { perkVotes: currVotes, totalTypeVotes, totalHeroVotes, votePercentage: votePercentageFormatted };
	}
	return { isLoading: true };
}

export const useVoteMutation = (heroId: string) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (perkId: number) => submitVote(perkId),
		onMutate: async (perkId) => {
			await queryClient.cancelQueries({ queryKey: ['votes', heroId] });

			const previousVotes = queryClient.getQueryData<VoteResponse[]>(['votes', heroId]);

			queryClient.setQueryData(['votes', heroId], (oldVotes: VoteResponse[] | undefined) => {
				if (!oldVotes) return [];

				return oldVotes.map((perk) => (perk.id === perkId ? { ...perk, votes: perk.votes + 1 } : perk));
			});

			return { previousVotes };
		},
		onError: (err, variables, context) => {
			if (context?.previousVotes !== undefined) {
				queryClient.setQueryData(['votes', heroId], context.previousVotes);
			}
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['votes', heroId] });
		},
	});
};
