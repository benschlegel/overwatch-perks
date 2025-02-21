import { test, expect, describe, assert } from 'vitest';
import { join } from 'node:path';
import { readFileSync } from 'node:fs';
import { PERKS } from '@/data/perks';
import { HEROES } from '@/data/heroes';

const imageFileExt = 'png';
const perkDir = 'assets/perks';

const heroIds = HEROES.map((hero) => hero.id);

describe('validate perk images', () => {
	test.concurrent.each(PERKS)('image exists and loads ($name)', ({ name, heroId, perkType, perkIndex }) => {
		const imgUrl = `${heroId}_${perkType}_${perkIndex}.${imageFileExt}`;
		const absoluteImagePath = join(__dirname, `../../public/${perkDir}/`, imgUrl);

		// Read the image file from the public folder
		const imageBuffer = readFileSync(absoluteImagePath);

		// Check that the image was successfully read
		expect(imageBuffer).toBeInstanceOf(Buffer);
		// Ensures it's not an empty file
		expect(imageBuffer.length).toBeGreaterThan(10);
	});
});

describe('validate perks', () => {
	test('all perks have unique ids', () => {
		const ids = PERKS.map((perk) => perk.id);
		const uniqueIds = new Set(ids);
		expect(ids.length).toBe(uniqueIds.size);
	});
	test.concurrent.each(PERKS)('perk has valid name + description ($name)', ({ name, description }) => {
		assert.isNotEmpty(name);
		assert.isNotEmpty(description);
	});
	describe('hero has all minor/major perks', () => {
		test.concurrent.each(heroIds)('%s', (id) => {
			const heroPerks = PERKS.filter((perk) => perk.heroId === id);

			const minorPerks = heroPerks.filter((perk) => perk.perkType === 'minor');
			const majorPerks = heroPerks.filter((perk) => perk.perkType === 'major');

			const minorIndices = new Set(minorPerks.map((perk) => perk.perkIndex));
			const majorIndices = new Set(majorPerks.map((perk) => perk.perkIndex));

			expect(minorIndices.has(0)).toBe(true);
			expect(minorIndices.has(1)).toBe(true);
			expect(majorIndices.has(0)).toBe(true);
			expect(majorIndices.has(1)).toBe(true);
		});
	});
});
