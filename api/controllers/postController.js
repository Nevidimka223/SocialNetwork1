const DiContainer = require('./../services/diContainer');
const db = DiContainer.resolve('dbConnection');

const getAllPosts = async (req, res) => {
    try { 
        const posts = await db('posts');
        res.status(200).json({
            posts: posts.length,
            data: {
                posts: posts,
            },
        })}
    catch (err) {
       res.status(404).json({
        status: 'fail',
        message: err,
      }); 
    }
};

const createPost = async (req, res) => {
    try { 
        const post = await db('posts').insert(req.body, '*');
        res.status(200).json({
            message: 'add successful',
            data: {
                post: post,
            },
        })}
    catch (err) {
       res.status(404).json({
        status: 'fail',
        message: err,
      }); 
    }
};

const deletePost = async (req, res) => {
    try { 
        const posts = await db('posts').where('id', req.params.id).del();
        if (posts){
            res.status(200).json({
                message: `delete post ${req.params.id} successful`
            })
        }
        else {
            res.status(404).json({
                message: `post ${req.params.id} not found`
            })
        }
    }
    catch (err) {
       res.status(404).json({
        status: 'fail',
        message: err,
      }); 
    }
};

const getPostById = async (req, res) => {
    try { 
        const post = await db('posts').where('id', req.params.id).first();
        res.status(200).json({
            message: `get post ${req.params.id} successful`,
            data: {
                post: post,
            },
        })}
    catch (err) {
       res.status(404).json({
        status: 'fail',
        message: err,
      }); 
    }
};

const updatePost = async (req, res) => {
    try { 
        const post = await db('posts').where('id', req.params.id).update(req.body,'*');
        res.status(200).json({
            message: `change post ${req.params.id} successful`,
            data: {
                post: post,
            },
        })}
    catch (err) {
       res.status(404).json({
        status: 'fail',
        message: err,
      }); 
    }
};

module.exports = {getAllPosts, createPost, deletePost, getPostById, updatePost};
