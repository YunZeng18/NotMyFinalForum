const fs = require('fs');
const forumJson = './data/forum.json';

function list() {
    const forumList = JSON.parse(fs.readFileSync(forumJson));
    return forumList;
}

module.exports = {
    list
}