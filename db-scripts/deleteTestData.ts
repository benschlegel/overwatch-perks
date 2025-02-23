import { deleteLogs } from '@/lib/databaseAccess';
import { exit } from 'node:process';

console.time('deleteLogs');
try {
	await deleteLogs('v0.0');
} catch (e) {
	console.error('Failed to delete logs: ', e);
}

console.timeEnd('deleteLogs');
console.log('Finished.');
exit(0);
