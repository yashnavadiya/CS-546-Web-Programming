const axios = require('axios');



async function getPeople() {
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return data // this will be the array of people
}

async function getPersonById(id) {
  if (typeof id != 'number') {
    throw "Error: id is not of proper type"
  }
  var a = await getPeople();
  if (id > a.length || id < 1) {
    throw "Error: id is out of bound"
  }
  for (var b of a) {
    if (b.id == id) {
      var c = b.firstName + " " + b.lastName;
      return c;
    }
  }
}



async function lexIndex(index) {
  if (typeof index != 'number') {
    throw "Error: index is not of proper type"
  }
  var a = await getPeople();
  var s = a.sort(function (x, y) {
    return x.lastName.localeCompare(y.lastName);
  });
  if (index >= s.length || index < 0) {
    throw "Error: index is out of bound"
  }
  for (var i = 1; i <= s.length; i++) {
    if (i = index) {
      var c = s[i].firstName + " " + s[i].lastName;
      return c;
    }
  }
}


async function firstNameMetrics() {
  var a = await getPeople();
  var lengthoffirstnames = 0;
  var totalconsonants = 0;
  for (var i = 0; i < a.length; i++) {
    var res = (a[i].firstName).length;
    lengthoffirstnames = lengthoffirstnames + res;
  }

  var totalvowels = 0;
  for (var j in a) {
    var x = a[j].firstName;
    var res = x.split('');
    for (var k in res) {
      if (res[k] == "a" || res[k] == "e" || res[k] == "i" || res[k] == "o" || res[k] == "u" || res[k] == "A" || res[k] == "E" || res[k] == "I" || res[k] == "O" || res[k] == "U") {
        totalvowels = totalvowels + 1;
      }
      else {
        totalconsonants = totalconsonants + 1;
      }
    }
  }

  function getMax(arr, prop) {
    var max;
    for (var i in arr) {
      if (!max || arr[i][prop] > max[prop])
        max = arr[i];
    }
    return max;
  }
  var mx = getMax(a, "firstName");
  var longestfirstname = mx.firstName;

  function getMin(arr, prop) {
    var max;
    for (var i in arr) {
      if (!max || arr[i][prop] < max[prop])
        max = arr[i];
    }
    return max;
  }
  var mn = getMin(a, "firstName");
  var shortestfirstname = mn.firstName;


  var result = {
    lengthoffirstnames,
    totalvowels,
    totalconsonants,
    longestfirstname,
    shortestfirstname,
  };
  return result;
}





module.exports = {
  getPersonById,
  lexIndex,
  firstNameMetrics
}







