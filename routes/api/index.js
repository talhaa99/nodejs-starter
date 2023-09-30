const express = require('express');
const router = express();
const appRoutes = require('./app');
const websiteRoutes = require('./website');

router.use('/website', websiteRoutes);
router.use('/app', appRoutes);

module.exports = router;