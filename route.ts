import { Router } from 'https://deno.land/x/oak/mod.ts';

import { getPosts, getPost, addPost, updatePost, deletePost } from './controllers.ts'

const router = new Router()
router.get('/Posts', getPosts)
    .get('/post/:isbn', getPost)
    .post('/Posts', addPost)
    .put('/post/:isbn', updatePost)
    .delete('/post/:isbn', deletePost)

export default router;