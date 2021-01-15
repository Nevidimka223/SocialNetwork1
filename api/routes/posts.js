const router = require('express').Router();
const {getAllPosts, createPost, deletePost, getPostById, updatePost} = require('./../controllers/postController');

router.get('/posts', getAllPosts);

router.get('/posts/:id', getPostById);

router.post('/posts', createPost);

router.put('/posts/:id', updatePost);

router.delete('/posts/:id', deletePost);

module.exports = router;