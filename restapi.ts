import { Application } from 'https://deno.land/x/oak/mod.ts'; // oak is a middleware for deno http server, it includes a router and a middleware
import router from './route.ts'

const HOST = '127.0.0.1';
const PORT = 5000;


const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)
