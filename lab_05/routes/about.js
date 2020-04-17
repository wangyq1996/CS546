const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    const about = {
        "name": "Yuqi Wang",
        "cwid": "10446070",
        "biography": "My name is Yuqi Wang. \n I'm 24 years old.",
        "favoriteShows": ["The Daily Show with Trevor Noah"],
        "hobbies": ["Playing CSGO", "Basketball", "Coding"]
    };
    try{
        res.json(about);
    }catch(e){
        res.status(404).send("No About Here");
    }
});

module.exports = router;