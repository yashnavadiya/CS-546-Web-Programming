const express = require('express');
const router = express.Router();
const udata = require('../data/functions');
var bcrypt = require('bcryptjs');
var session = require('express-session')




router.get('/', async (req, res) => {
    if (!req.session.user) {
        res.render('posts/form');
    }
    else {
        res.redirect('/private');
    }

});


router.get('/private', function (req, res, next) {
    if (!req.session.user) {
        res.status(403).render('posts/error', {
            error: "User is not logged in ."
        })
    }
    else {
        next();
    }
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const authenticate = await udata.check(username, password);
    if (authenticate == true) {
        req.session.user = username;
        res.redirect('/private');
    }
    else {
        res.render('posts/form', {
            error: "Incorrect Credentials"
        })
    }
});



router.get('/private', async (req, res) => {
    var username = req.session.user;
    const newuser = await udata.getPerson(username);
    res.render('posts/detail', { response: newuser });
});


router.get('/logout', async (req, res) => {
    if (req.session.user) {
        req.session.destroy();
        res.render('posts/logout', {
            message: "You have successfully logout"
        });
    }
})

module.exports = router;
