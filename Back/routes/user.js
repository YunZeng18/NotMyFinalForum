const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:name', userController.getUserByName);

module.exports = router;