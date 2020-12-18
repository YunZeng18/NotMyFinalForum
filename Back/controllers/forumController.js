const forum = require('../models/forumModel');

function getForumList(_req, res) {
    res.status(200).json(forum.list());
}

function getForumByName(req, res) {
    res.json(forum.getByName(req.params.name));
}
function createForum(req, res) {
    if (!req.body.name || !req.body.description) {
        res.status(400).json({
            error: 'POST body must contain all requiredProperties',
            requiredProperties: ['name', 'description'],
        });
    }
    const newForum = {
        name: req.body.name,
        description: req.body.description,
        owner: req.body.owner
    };
    res.status(201).json(forum.add(newForum));
}

module.exports = {
    getForumList,
    getForumByName,
    createForum
}