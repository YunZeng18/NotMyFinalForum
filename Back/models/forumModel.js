const fs = require('fs');
const forumJson = './data/forum.json';

function list() {
    const forumList = JSON.parse(fs.readFileSync(forumJson));
    return forumList;
}

function getByName(name) {
    const forum = JSON.parse(fs.readFileSync(forumJson));
    return forum.filter(item => item.name === name);
}

module.exports = {
    list,
    getByName
}