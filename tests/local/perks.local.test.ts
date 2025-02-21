import { test, expect, describe } from 'vitest';
import { join } from 'node:path';
import { readFileSync } from 'node:fs';
import { PERKS } from '@/data/perks';

const imageFileExt = 'png';
const perkDir = 'assets/perks';

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
