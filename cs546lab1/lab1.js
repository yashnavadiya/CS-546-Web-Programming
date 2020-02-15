const questionOne = function questionOne(arr) {
    var total = 0;
    i = arr.length;
    for (i = 0; i < arr.length; i++) {
        total = total + Math.pow(arr[i], 2);
    }
    return total;
}


const questionTwo = function questionTwo(num) {
    if (num <= 0) {
        return 0;
    }
    else if (num == 1) {
        return 1;
    }
    else {
        var a = 0;
        var b = 1;
        var total = 1;
        for (var i = 2; i <= num; i++) {
            total = a + b;
            a = b;
            b = total;
        }
        return total;
    }
}

const questionThree = function questionThree(text) {
    var count = 0;
    var x;
    for (let i = 0; i < text.length; i++) {
        x = text[i];
        if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u" || x == "A" || x == "E" || x == "I" || x == "O" || x == "U") {
            count += 1;
        }
    }
    return count;
}

const questionFour = function questionFour(num) {
    let fact = 1;
    if (num < 0) {
        return NaN;
    }
    else if (num == 0) {
        return 1;
    }
    else {
        for (let i = 1; i <= num; i++) {
            fact = fact * i;
        }
        return fact;
    }
}

module.exports = {
    firstName: "YASH",
    lastName: "NAVADIYA",
    studentId: "10455328",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};