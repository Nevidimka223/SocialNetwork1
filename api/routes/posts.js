const router = require('express').Router();


router.get('/posts', (req, res) => {
    res.send(`get post`);
});

router.get('/posts/:id', (req, res) => {
    res.send(`get post ${req.params.id}`);
});

router.post('/posts', (req, res) => {
    res.send(`create post`);
});

router.put('/posts/:id', (req, res) => {
    res.send(`change post ${req.params.id}`);
});

router.delete('/posts/:id', (req, res) => {
    res.send(`deleted post ${req.params.id}`);
});

module.exports = router;