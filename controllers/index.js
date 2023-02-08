const express = require('express');
const router = express.Router();

const userRoutes = require('./userController');
router.use("/api/users",userRoutes);

const blogRoutes = require('./blogController');
router.use("/api/blog",blogRoutes);

module.exports = router;