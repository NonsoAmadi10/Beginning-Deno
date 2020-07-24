import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getPosts, getPost, addPost, updatePost, deletePost } from './controller.ts'

const router = new Router()
router.get('/books', getPosts)
    .get('/books/:isbn', getPost)
    .post('/books', addPost)
    .put('/books/:isbn', updatePost)
    .delete('/books/:isbn', deletePost)

export default router;