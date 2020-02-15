const axios = require('axios');

async function getPeople() {
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return data // this will be the array of people
}

async function getweather() {
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
  return data // this will be the array of people
}
async function shouldTheyGoOutside(firstName, lastName) {
  if (typeof firstName == 'undefined' || typeof lastName == 'undefined') {
    throw "Error:  Firstname or lastname does not exist "
  }
  if (typeof firstName != 'string' || typeof lastName != 'string') {
    throw "Error:  Firstname or lastname is not of a proper type "
  }
  var d = 0;
  var a1 = await getPeople();
  var a2 = await getweather();


  for (var b of a1) {
    if (b.firstName == firstName && b.lastName == lastName) {
      d = 1;
      var z = b.zip;
      for (var c of a2) {
        if (z == c.zip) {
          var t = c.temp;
          if (t >= 34) {
            return "yes , " + b.firstName + "  should go outside";
          }
          else {
            return "No , " + b.firstName + "  should not go outside";
          }
        }
      }
    }
  }
  if (d == 0) {
    throw "Error: Person does not exist";
  }

}

module.exports = {
  shouldTheyGoOutside
}
