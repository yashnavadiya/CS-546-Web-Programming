const express = require('express');
const router = express.Router();

const a = {
    "name": "Yash Navadiya",
    "cwid": "10455328",
    "biography": "My hometown is surat. my father own a business of selling goods.\n  I did bachelor's in computer engineering at charusat university.I am pursuing my masters degree in Computer Science in Stevens Institute of Technology",
    "favoriteShows": ["Tarak mehta ka oltah chasmah", "Doreamon", "Big boss"],
    "hobbies": ["Cricket", "Reading", "Sleeping"]
}

router.get("/", async (req, res) => {

    res.json(a)
});

module.exports = router;