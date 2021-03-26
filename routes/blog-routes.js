const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Blog = require('../models/blogs');


//get blogs
router.get('/blogs', function(req, res) {
    res.send({type: 'GET'});
    });

router.post('/blogs', function (req, res){
    console.log(req.body);
    blog.create(req.body).then(function(blog){
        res.send(blog);
    });
});

router.put('/blogs/:id', function(req, res){
    res.send({type: 'PUT'});
});

router.delete('/blogs/:id', function(req, res){
    res.send({type: 'DELETE'});
});



module.exports = router;