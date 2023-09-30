const express = require('express');
const router = express();
const apiRoutes = require('./api/index');

router.use('/api', apiRoutes);

router.use(function (req, res) {
    res.status(404).send("Not found!");
});

module.exports = router;