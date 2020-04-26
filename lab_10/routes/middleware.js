const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcryptjs');
const userData = require('./userData');

router.get('/private', (req, res) => {
    if (req.session.user) {
        res.render('pages/private.handlebars', req.session.userData);
    } else res.status(403).json({ error: 'Not Signed In' });
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.render('pages/logout.handlebars', {
        title: 'Log Out',
        message: 'You have been successfully logged out!',
    });
});

router.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/private');
    } else res.render('pages/signin.handlebars', { title: 'Login Page' });
});

router.post('/login', (req, res) => {
    const header = 'Personal Page';
    let userName = JSON.stringify(req.body.username);
    userName = userName.substring(1, userName.length - 1);
    let passWord = JSON.stringify(req.body.password);
    passWord = passWord.substring(1, passWord.length - 1);
    const check = userCheck(userName, passWord);
    if (!check) {
        res.status(401);
        res.render('pages/signin.handlebars', { title: 'Login Page' });
        return;
    }
    req.session.user = check.username;
    req.session.userData = check;
    res.redirect('/private');
});

const userCheck = (userName, passWord) => {
    for (let i of userData) {
        if (userName === i.username) {
            if (bcrypt.compare(passWord, i.hashedPassword)) return i;
        }
    }
    return false;
};

module.exports = router;
