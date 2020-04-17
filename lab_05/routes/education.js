const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    const edu = [
        {
          "schoolName": "Stevens Institute of Technology",
          "degree": "Master Degree",
          "favoriteClass": "Web Programming",
          "favoriteMemory": "Doing Web Programming Labs XD"
        },
        {
            "schoolName": "Xi'an Jiaotong University",
            "degree": "Bachelor Degree",
            "favoriteClass": "Programming",
            "favoriteMemory": "Playing basketball"
          },
          {
            "schoolName": "Beijing No.171 High School",
            "degree": "High School",
            "favoriteClass": "Chemistry",
            "favoriteMemory": "Having Meals with friends"
          }
    ];
    try{
        res.json(edu);
    }catch(e){
        res.status(404).send("No Education Here");
    }
});

module.exports = router;