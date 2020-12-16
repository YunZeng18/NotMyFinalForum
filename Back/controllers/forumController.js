const forum = require('../models/forumModel');

function getForumList(_req, res) {
    res.status(200).json(forum.list());
}

module.exports = {
    getForumList
}