
const express = require('express');
const router = express.Router();
const queries = require('../db/dbqueries');

router.get('/', (req, res) => {
    queries.getAllPhotos().then(photo => {
        res.json(photo);
    }).catch(err => {console.log(err)})
});

router.get('/:id', (req, res) => {
    queries.getOne('photos', req.params.id).then(photo => {
        res.json(photo);
    });
});

// router.post('/new', (req, res) => {
//     queries.createPost(req.body.user_id, req.body.title, req.body.body).then(post => {
//         res.json(post[0]);
//     });
// });

module.exports = router;