const express = require('express');
const router = express.Router();
const peopledata = require('../data/people');



router.get('/', async (req, res) => {
    res.render('posts/pfinder', { title: "People Finder" });
});

router.post('/search', async (req, res) => {
    let blogData = req.body.title;
    if (blogData == null || blogData == undefined) {
        res.status(400).render('posts/e', { error: { status: 400, message: "Please enter a value in the text box." } })
    }
    try {
        const searchdata = await peopledata.searchbyname(blogData);
        res.render('posts/searchpage', { title: "People Found", res: searchdata, personName: blogData });
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        let x = parseInt(req.params.id);
        const d = await peopledata.getPersonById(x);
        res.render('posts/detailspage', { title: "Person Found", resu: d, ID: x });
    } catch (e) {
        res.status(500).json({ error: e });
    }
})

module.exports = router;