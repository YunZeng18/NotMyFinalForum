const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController.js');
//GET /forum/list
router.get('/list', forumController.getForumList);

router.get('/:name', forumController.getForumByName);

module.exports = router;