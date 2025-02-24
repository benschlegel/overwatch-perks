import { addTest } from '@shared-lib/databaseAccess'
import type { DbTest } from '@shared/database'
import { Elysia } from 'elysia'

const app = new Elysia()
	.get('/', async () => {
		// test
		const abc: DbTest = {prop: "Custom Prop2"}
		console.time("db")
		addTest( "Db Test")
		console.timeEnd("db")
		return `Hello world! (${abc.prop})`
	})
	.listen(3010)

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
