import { fetchVotes, submitVote } from '@/app/cheatsheet/lib/queries';
import type { HeroId } from '@/data/heroes';
import type { VoteResponse } from '@/types/database';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useVotes = (heroId: HeroId) => {
	return useQuery({
		queryKey: ['votes', heroId], // Cache votes per heroId
		queryFn: () => fetchVotes(heroId),
		enabled: !!heroId, // Fetch only if heroId exists
		staleTime: 30000, // Keep data fresh for 30s
		refetchInterval: 30000, // Auto-refresh every 30s
	});
};

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
