const fs = require('fs');
const usersJson = './data/user.json';

function getByName(name) {
    const users = JSON.parse(fs.readFileSync(usersJson));
    return users.filter(user => user.name === name);
}

module.exports = { getByName };