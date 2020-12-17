const forum = require('../models/forumModel');

function getForumList(_req, res) {
    res.status(200).json(forum.list());
}

function getForumByName(req, res) {
    res.json(forum.getByName(req.params.name));
}

module.exports = {
    getForumList,
    getForumByName
}