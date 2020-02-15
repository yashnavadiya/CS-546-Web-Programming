var bcrypt = require('bcryptjs');
const data = require('./users');

async function check(username, password) {
    for (var b in data) {
        if (data[b].username == username) {
            var hash = data[b].hashedPassword;
            if (bcrypt.compareSync(password, hash)) {
                return true;
            }
        }
    }
}

async function getPerson(username) {
    var c;
    for (var b in data) {
        if (data[b].username == username) {
            c = data[b];
            break;
        }
    }
    return c;
}

module.exports = {
    getPerson,
    check
}