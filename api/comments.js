const express = require('express');
const router = express.Router();
const queries = require('../db/dbqueries');

router.get('/', (req, res) => {
    queries.getAllComments().then(comment => {
        res.json(comment);
    }).catch(err => {console.log(err)})
    
});

//photoId, userId, body
router.post('/', (req, res) => {
    console.log("pls work body", req.body.user_id)
    queries.createComment(req.body.user_id, req.body.photo_id, req.body.comments_text).then(comment => {
        res.json(comment);
    })
});

module.exports = router;