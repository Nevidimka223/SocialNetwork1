const router = require('express').Router();
const {getAllPosts, createPost, deletePost, getPostById, updatePost} = require('./../controllers/postController');
const checkAuth = require('../middleware/acl').checkAuthorized;

router.get('/posts', [checkAuth, getAllPosts]);

router.get('/posts/:id', [checkAuth, getPostById]);

router.post('/posts', [checkAuth, createPost]);

router.put('/posts/:id', [checkAuth, updatePost]);

router.delete('/posts/:id', [checkAuth, deletePost]);

module.exports = router;