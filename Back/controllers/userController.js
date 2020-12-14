const users = require('../models/userModel');

function getUserByName(req, res) {
    res.status(200).json(users.getByName(req.params.name));
}

module.exports = {
    getUserByName
}