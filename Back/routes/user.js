const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//GET /user/:name
router.get('/:name', userController.getUserByName);

module.exports = router;