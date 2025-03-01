import type { HeroId } from '@/data/heroes';
import type { VoteResponse } from '@/types/database';

export async function fetchVotes(heroId: HeroId): Promise<VoteResponse[]> {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/votes/${heroId}`;
	const response = await fetch(url);
	if (!response.ok) throw new Error(`Failed to get votes (${heroId})`);
	return response.json();
}

export async function submitVote(perkId: number) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/vote/${perkId}`;
	const response = await fetch(url, { method: 'POST' });
	if (!response.ok) throw new Error('Failed to submit vote');
	return true;
}
