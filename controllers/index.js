const router = require('express').Router();

const apiRoutes = require('/');
const blogRoutes = require('/blogRoutes');

router.use('/', blogRoutes);
router.use('/api', apiRoutes);

module.exports = router;
