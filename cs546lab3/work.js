const axios = require('axios');
async function getPeople() {
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return data // this will be the array of people
}

async function getWork() {
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
  return data // this will be the array of people
}


async function whereDoTheyWork(firstName, lastName) {
  var a1 = await getPeople();
  var a2 = await getWork();
  if (typeof firstName == 'undefined' || typeof lastName == 'undefined') {
    throw "Error:  Firstname or lastname does not exist "
  }
  if (typeof firstName != 'string' || typeof lastName != 'string') {
    throw "Error:  Firstname or lastname is not of a proper type "
  }
  var d = 0;
  for (var b of a1) {
    if (b.firstName == firstName && b.lastName == lastName) {
      d = 1;
      var s = b.ssn;
      for (var c of a2) {
        if (s == c.ssn) {
          var w = c.company;
          if (c.willBeFired == true) {
            return " " + b.firstName + " " + b.lastName + " -  " + c.jobTitle + " at " + w + " . They will be fired.";
          }
          else {
            return " " + b.firstName + " " + b.lastName + " -  " + c.jobTitle + " at " + w + " . They will not be fired. ";
          }
        }
      }
    }
  }
  if (d == 0) {
    throw "Error: Person does not exist ";
  }
}


async function findTheHacker(ip) {
  if (typeof ip != 'string') {
    throw "Error : ip is not of proper type "
  }
  var d = 0;
  var a1 = await getPeople();
  var a2 = await getWork();
  for (var b of a2) {
    if (b.ip == ip) {
      var s = b.ssn
      for (var c of a1) {
        if (s == c.ssn) {
          var a = c.firstName + " " + c.lastName;
          return a + "  is the hacker ! ";
        }
      }
    }
  }
  if (d == 0) {
    throw "Error: Ip does not exist";
  }
}

module.exports = {
  whereDoTheyWork,
  findTheHacker
}
