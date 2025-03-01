import { fetchVotes } from '@/app/cheatsheet/lib/queries';
import type { HeroId } from '@/data/heroes';
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
