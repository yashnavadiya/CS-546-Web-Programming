const people = require("./people");
const weather = require("./weather");
const work = require("./work");

async function main() {

    try {
        const peopledata = await people.getPersonById(500)
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
    try {
        const peopledata = await people.getPersonById("yash")
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
    try {
        const peopledata = await people.getPersonById(501)
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
    try {
        const peopledata = await people.lexIndex(3)
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
    try {
        const peopledata = await people.lexIndex(-1)
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
    try {
        const peopledata = await people.lexIndex(2)
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
    try {
        const peopledata = await people.firstNameMetrics()
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }

    try {
        const peopledata = await weather.shouldTheyGoOutside("Scotty", "Barajaz")
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
    try {
        const peopledata = await weather.shouldTheyGoOutside(1, "yash")
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }

    try {
        const peopledata = await weather.shouldTheyGoOutside("navadiya", "yash")
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
    try {
        const peopledata = await work.whereDoTheyWork("Demetra", "Durrand")
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
    try {
        const peopledata = await work.whereDoTheyWork()
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
    try {
        const peopledata = await work.whereDoTheyWork("yash", "yash")
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }




    try {
        const peopledata = await work.findTheHacker("79.222.167.180")
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }

    try {
        const peopledata = await work.findTheHacker("foobar")
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
    try {
        const peopledata = await work.findTheHacker(11.222)
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
}
//call main
main()
