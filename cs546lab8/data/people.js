const axios = require('axios');



async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
}


async function searchbyname(name) {
    if (name == undefined) {
        throw "Error: please enter name.";
    }
    if (typeof name !== 'string') {
        throw "Error: name is not of proper type";
    }
    var a = await getPeople();
    var found = [];
    let regex = new RegExp([".*", name, ".*"].join(""), "i");
    for (b in a) {
        var f = a[b].firstName;
        var l = a[b].lastName;
        if (f.match(regex) || l.match(regex)) {
            found.push(a[b])
        }
    }
    var print = found.slice(0, 20);
    return print;
}


async function getPersonById(id) {
    var c = [];
    if (typeof id !== 'number') {
        throw "Error: id is not of proper type"
    }
    var a = await getPeople();
    if (id > a.length || id < 1) {
        throw "Error: id is out of bound"
    }
    for (var b in a) {
        if (a[b].id == id) {
            c.push(a[b]);
        }
    }
    return c;
}

module.exports = {
    searchbyname,
    getPersonById
}







