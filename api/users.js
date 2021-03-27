const express = require('express');
const router = express.Router();
const photosRouter = express.Router({ mergeParams: true });
const queries = require('../db/dbqueries');

router.use('/:id/photos', photosRouter);


router.get('/', (req, res) => {
    queries.getAll('users').then(user => {
        res.json(user);
    });
});

router.get('/:id', (req, res) => {
    queries.getOne('users', req.params.id).then(user => {
        res.json(user);
    });
});

photosRouter.get('/', (req,res) => {
    queries.getPhotoByUser(req.params.id).then(photo => {
        res.json(photo);
    })
})

module.exports = router;