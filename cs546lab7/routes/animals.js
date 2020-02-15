const express = require('express');
const router = express.Router();
const data = require('../data');

const postanimaldata = data.animals;

router.post('/', async (req, res) => {
    const blogPostanimalData = req.body;
    try {
        const { name, animalType } = blogPostanimalData;
        const newanimal = await postanimaldata.create(name, animalType);
        res.status(200).json(newanimal);
    } catch (e) {
        res.status(400).json({ error: e });
    }
});

router.get('/', async (req, res) => {
    try {
        const animalList = await postanimaldata.getAll();
        res.json(animalList);
    } catch (e) {
        res.status(500).json({ error: "Error: " + e });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const animalbyid = await postanimaldata.get(req.params.id);
        res.status(200).json(animalbyid);
    } catch (e) {
        res.status(404).json({ error: 'animal not found of the provided id' });
    }
});

router.put('/:id', async (req, res) => {
    const updatedData = req.body;
    try {
        await postanimaldata.get(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'animal not found' });
        return;
    }

    try {
        const updatedPost = await postanimaldata.update(req.params.id, updatedData.newName, updatedData.newType);
        res.json(updatedPost);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await postanimaldata.get(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'animal not found' });
        return;
    }
    try {
        const deleteddata = await postanimaldata.remove(req.params.id);
        res.json(deleteddata);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

module.exports = router;