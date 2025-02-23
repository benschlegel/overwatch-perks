'use client';
import AnswerCards from '@/components/landing-page/answer-cards';
import ExactAnswerCard from '@/components/landing-page/exact-answer-card';
import { useSetting } from '@/hooks/use-settings-param';

export default function AnswerCardWrapper() {
	const [useHardMode, _] = useSetting('hardMode');
	return useHardMode ? <ExactAnswerCard /> : <AnswerCards />;
}
