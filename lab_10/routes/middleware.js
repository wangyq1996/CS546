const express = require('express');
const router = express.Router();
const path = require('path');

// router.get('/private', (req, res) => {
//     res.sendFile('home.html', { root: 'views' });
// });

router.get('/',(req,res)=>{
    res.render('pages/signin.handlebars',{title:'Signin Page'});
});

module.exports = router;
