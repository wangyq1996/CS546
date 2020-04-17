const express = require('express');
const router = express.Router();
var path = require('path');


function palindromCheck (s){
    if(!s || typeof s !== 'string' || s.length === 0) throw 'Invalid Input';
    s = s.toLowerCase();
    let left = 0;
    let right = s.length-1;
    let helper = false;
    while(left<=right){
        if(!isWord(s.charAt(left)) || !isWord(s.charAt(right))){
            if(!isWord(s.charAt(left))) left++;
            if(!isWord(s.charAt(right))) right--;
        }else{
            if(s.charAt(left) === s.charAt(right)){
                left++;
                right--;
                helper = true;
            }else return false;
        }
    }
    return helper;
}

function isWord (c) {
    if(c.charCodeAt(0)-'a'.charCodeAt(0)>=0 && c.charCodeAt(0)-'a'.charCodeAt(0)<26) return true;
    return false;
}

router.get('/',(req,res) => {
    res.render('results/index',{title:'The Best Palindrome Checker in the World!'});
});

router.post('/result',(req,res) => {
    const header = 'The Palindrome Results!';
    let input = JSON.stringify(req.body.input);
    input = input.substring(1,input.length-1);
    try{
        const temp = palindromCheck(input);
        result = 
        {
            title:header,
            TorF:temp,
            input:input
        };
        res.render('results/result',result);
    }catch(e){
        res.render('results/error',{title:header,error:e});
    }
});

module.exports = router;

