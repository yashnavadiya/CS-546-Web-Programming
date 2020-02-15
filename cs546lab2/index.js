const arr = require('./arrayUtils');
const str = require('./stringUtils');
const ob = require('./objUtils');

try {
    console.log(arr.head([1,2,3]))
}catch (error){
    console.log(error)
}


try {
    console.log(arr.head([]))
}catch (error){
    console.log(error)
}


try {
    console.log(arr.head())
}catch (error){
    console.log(error)
}


try {
    console.log(arr.last([1,2,3]))
}catch (error){
    console.log(error)
}



try {
    console.log(arr.range(4,'hi'))
}catch (error){
    console.log(error)
}


try {
    console.log(arr.range(0,'hi'))
}catch (error){
    console.log(error)
}

try {
    console.log(arr.countElements([13,'13','yash','yash']))
}catch (error){
    console.log(error)
}


try {
    console.log(arr.remove([1,2,3],1))
}catch (error){
    console.log(error)
}


try {
    console.log(arr.remove([1,2,3],4))
}catch (error){
    console.log(error)
}


try {
    console.log(arr.isEqual([1,2,4],[1,2,4]))
}catch (error){
    console.log(error)
}


try {
    console.log(arr.isEqual([1,2,3],[1,2,4]))
}catch (error){
    console.log(error)
}


try {
    console.log(str.capitalize("yaSh"))
}catch (error){
    console.log(error)
}


try {
    console.log(str.capitalize(123))
}catch (error){
    console.log(error)
}

try {
    console.log(str.repeat("hi",3))
}catch (error){
    console.log(error)
}

try {
    console.log(str.repeat("hi",-2))
}catch (error){
    console.log(error)
}



try {
    console.log(str.countChars("nameisyash"))
}catch (error){
    console.log(error)
}


try {
    console.log(str.countChars())
}catch (error){
    console.log(error)
}



try {
    const first = { x: 2, y: 3};
    const second = { a: 70, x: 4, z: 5 };
    const third = { x: 0, y: 9, q: 10 };
    console.log(ob.extend(first,second,third))
}catch (error){
    console.log(error)
}


try {
    //const first = { x: 2, y: 3};
    //const second = { a: 70, x: 4, z: 5 };
    const third = { x: 0, y: 9, q: 10 };
    console.log(ob.extend(third))
}catch (error){
    console.log(error)
}


try {
    const first = { x: 2, y: 3};
    const second = { a: 70, x: 4, z: 5 };
    const third = { x: 0, y: 9, q: 10 };
    console.log(ob.smush(first,second,third))
}catch (error){
    console.log(error)
}


try {
    console.log(ob.mapValues({ a: 1, b: 2, c: 3 }, n => n + 1))
}catch (error){
    console.log(error)
}

