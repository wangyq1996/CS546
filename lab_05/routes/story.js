const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    const story = {
        "storyTitle": "Playing Games",
        "story": "Open my pc.\nLog in my account.\nLet's Gooooooooooooo!!!"
    };
    try{
        res.json(story);
    }catch(e){
        res.status(404).send("No Story Here");
    }
});

module.exports = router;