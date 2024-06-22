//same instance of express as in index in main
const express = require('express');
const router = express.Router();

router.use('/tasks',require("./tasks"));

module.exports = router;