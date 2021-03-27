const express = require('express');
const router = express.Router();
const queries = require('../db/dbqueries');

router.get('/:id', (req, res) => {
    queries.getAllComments(req.params.id).then(comments => {
        res.json(comments);
    })
});

//postId, userId, body
router.post('/', (req, res) => {
    queries.createComment(req.body.photoId, req.body.userId, req.body.comments_text).then(comment => {
        res.json(comment);
    })
});

module.exports = router;