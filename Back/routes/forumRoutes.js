const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController.js');
//GET /forum/list
router.get('/list', forumController.getForumList);

module.exports = router;