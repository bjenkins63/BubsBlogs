const router = require('express').Router();

const BlogRoutes = require('../blog-routes');

router.use('/blog', BlogRoutes);

module.exports = router;