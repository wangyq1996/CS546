const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req,res) => {
    res.sendFile('home.html',{root:"views"});
});


module.exports = router;