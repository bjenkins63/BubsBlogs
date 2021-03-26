const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Blog = require('../models/blogs');


//get blogs
router.get('/', (req, res) =>
    db.query(`SELECT * FROM blogs`, (err, blogPost) => {
        if(err) {
            console.log(err)
        } else {
            res.json(blogPost)
        }
    })


//display form
// router.get('add', (req, res) => res.render('add'));

// //add blog
// router.post('/add', (req, res) => {
//     let { title, description } = req.body;
  
// Blog.create({ title, description })
//     .then(blog => res.redirect('/blogs'))
//       .catch(err => res.render('error', {error:err.message}))
);


module.exports = router;