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
function Forum(name, owner, description) {
    this.name = name;
    this.description = description;
    this.member = [owner];
    this.owner = owner;
    this.moderator = [owner];
    this.timestamp = Date.now();
    this.post = [];
}
function add(forum) {
    const forums = JSON.parse(fs.readFileSync(forumJson));
    const newForum = new Forum(forum.name, forum.owner, forum.description);
    forums.push(newForum);
    fs.writeFileSync(forumJson, JSON.stringify(forums));
    return forums;
}

module.exports = {
    list,
    getByName,
    add
}