const express = require('express');
const router = express.Router();

const b = {
    "storyTitle": "The time I started School ",
    "story": "I am a freshman at Rosemount High School. My school starts at 7:29 in the morning, and this start time has a real impact on my life. My middle school started at 8:03, and even this switch from 8:03 to 7:29 has made it harder for me to get a good night’s sleep. I strive to get 8-9 hours of sleep every night, but my early start times make this a challenge. During the week, I usually get around 7 and a half hours of sleep. Every Friday, I feel so tired from the week of getting up early that I usually go to bed at the same time I would on a school night. However, on the weekends, I get around 2 hours more sleep every night than I do during the week. \n My friends are always talking about how tired they are, and the majority of my friends get even less sleep than I do. It takes me about an hour each night to get ready for the next day of school, so I have to set aside a fair amount of time if I want to get a decent amount of sleep. I usually start getting ready for bed around 9:30, and go to bed around 10:20. When I get up at 6:00 the next morning, that leaves me with just over 8 hours of sleep. I prioritize sleep more than almost all of my friends, but I still feel tired almost every school day, and I know that a lot of people in my school feel even worse. I still have to go through 3 more years of waking up early, so I would greatly appreciate any efforts made to delay school start times."
}

router.get("/", async (req, res) => {

    res.json(b)
});

module.exports = router;