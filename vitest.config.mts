import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import CustomReporter from './tests/CustomReporter';
import { loadEnv } from 'vite'

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		reporters: process.env.WRITE_TEST_REPORT === "true" ? [new CustomReporter()] : "default",
		env: loadEnv('', process.cwd(), ''),
		environment: 'node',
	}
});
