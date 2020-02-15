const express = require('express');
const router = express.Router();


const c = [
    {
        "schoolName": "Radiant English Academy",
        "degree": "High School Diploma",
        "favoriteClass": "maths",
        "favoriteMemory": "I got excited too much when i scored 90% in class 10"
    },
    {
        "schoolName": "St xaviers",
        "degree": "High School Diploma",
        "favoriteClass": " chemistry",
        "favoriteMemory": "when i socred 1st position in a quiz of chemistry class"
    },
    {
        "schoolName": "pp savani international school",
        "degree": "High School Diploma",
        "favoriteClass": "physics",
        "favoriteMemory": "when i was awarded as the fastest runner of the school"
    },
]



router.get("/", async (req, res) => {

    res.json(c)
});

module.exports = router;