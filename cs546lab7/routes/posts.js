const express = require('express');
const router = express.Router();
const data = require('../data');

const postData = data.posts;

router.post('/', async (req, res) => {
    const blogPostData = req.body;
    //  try {
    const { title, author, content } = blogPostData;
    const newPost = await postData.createpost(title, author, content);
    res.status(200).json(newPost);
    //  } catch (e) {
    //      res.status(400).json({ error: 'cannot create post' });
    // }
});


router.get('/', async (req, res) => {
    try {
        const postList = await postData.getallposts();
        res.json(postList);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const post = await postData.getbyid(req.params.id);
        res.status(200).json(post);
    } catch (e) {
        res.status(404).json({ error: 'post not found of provided id' });
    }
});

router.put('/:id', async (req, res) => {
    const updatedData = req.body;
    try {
        await postData.getbyid(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'Post not found of provided id ' });
        return;
    }

    try {
        const updatedPost = await postData.update(req.params.id, updatedData.newTitle, updatedData.newContent);
        res.json(updatedPost);
    } catch (e) {
        res.status(400).json({ error: e });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await postData.getbyid(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'Post not found with the provided id' });
        return;
    }
    try {
        const a = await postData.remove(req.params.id);
        res.json(a);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

module.exports = router;


