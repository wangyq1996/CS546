

// console.log(lab2_u.uniqueElements(["a", "a", "b", "a", "b", "c"]));
// let map = lab2_u.countOfEachCharacterInString("Hello, the pie is in the oven");



//TestCase for geometry.js
const lab2_g = require('./geometry');
//TestCase for volumeOfRectangularPrism
console.log(lab2_g.volumeOfRectangularPrism(2,3,4));// Should be 24
console.log(lab2_g.volumeOfRectangularPrism(1.4,1.8,3.3));// Should be 8.316
console.log(lab2_g.volumeOfRectangularPrism(22,333,4444));// Should be 32556744
try{
    console.log(lab2_g.volumeOfRectangularPrism(-2,3,4));// Should be 'Input is not a positive number'
}catch(e) {
    console.log(e);
}
try{
    console.log(lab2_g.volumeOfRectangularPrism([2,3,4],3,4));// Should be 'Input is not a Number'
}catch(e) {
    console.log(e);
}
//TestCase for surfaceAreaOfRectangularPrism
console.log(lab2_g.surfaceAreaOfRectangularPrism(2,3,4));// Should be 52
console.log(lab2_g.surfaceAreaOfRectangularPrism(1.4,1.8,3.3));// Should be 26.16
console.log(lab2_g.surfaceAreaOfRectangularPrism(22,333,4444));// Should be 3169892
try{
    console.log(lab2_g.surfaceAreaOfRectangularPrism(-2,3,4));// Should be 'Input is not a positive number'
}catch(e) {
    console.log(e);
}
try{
    console.log(lab2_g.surfaceAreaOfRectangularPrism([2,3,4],3,4));// Should be 'Input is not a Number'
}catch(e) {
    console.log(e);
}
//TestCase for volumeOfSphere
console.log(lab2_g.volumeOfSphere(4));// Should be 268.08257310633
console.log(lab2_g.volumeOfSphere(3.3));// Should be 150.53255358941
console.log(lab2_g.volumeOfSphere(333));// Should be 154675422.08718
try{
    console.log(lab2_g.volumeOfSphere(0));// Should be 'Input is not a positive number'
}catch(e) {
    console.log(e);
}
try{
    console.log(lab2_g.volumeOfSphere([2,3,4]));// Should be 'Input is not a Number'
}catch(e) {
    console.log(e);
}
//TestCase for surfaceAreaOfSphere
console.log(lab2_g.surfaceAreaOfSphere(4));// Should be 201.06192982975
console.log(lab2_g.surfaceAreaOfSphere(3.3));// Should be 136.84777599037
console.log(lab2_g.surfaceAreaOfSphere(333));// Should be 1393472.2710557
try{
    console.log(lab2_g.surfaceAreaOfSphere(0));// Should be 'Input is not a positive number'
}catch(e) {
    console.log(e);
}
try{
    console.log(lab2_g.surfaceAreaOfSphere([2,3,4]));// Should be 'Input is not a Number'
}catch(e) {
    console.log(e);
}

//TestCase for utilities.js
const lab2_u = require('./utilities');
//TestCase for deepEquality
let A = {a:2,b:3};
let B = {a:2,b:3};
console.log(lab2_u.deepEquality(A,B));// Should return true
B = {a:2,b:4};
console.log(lab2_u.deepEquality(A,B));// Should return false
B = {b:3,a:2};
console.log(lab2_u.deepEquality(A,B));// Should return true
A = {
    a:1,
    b:{
        c:3,
        d:4
    }
};
B = {
    a:1,
    b:{
        c:3,
        d:4
    }
};
console.log(lab2_u.deepEquality(A,B));// Should return true
A = {
    a:1,
    b:{
        c:3,
        d:5
    }
};
B = {
    a:1,
    b:{
        c:3,
        d:4
    }
};
console.log(lab2_u.deepEquality(A,B));// Should return false
//TestCase for uniqueElements
let testArr = ["a", "a", "b", "a", "b", "c"];
console.log(lab2_u.uniqueElements(testArr)) // output 3
testArr = ['aer','asdf','rwerw'];
console.log(lab2_u.uniqueElements(testArr)) // output 3
testArr = [1,2,3,3,4,"sadfk"];
console.log(lab2_u.uniqueElements(testArr)) // output 5
testArr = "Not a Array";
try{
    console.log(lab2_u.uniqueElements(testArr)) // throw error
}catch(e) {
    console.log(e);
}
testArr = {a:1,b:2};
try{
    console.log(lab2_u.uniqueElements(testArr)) // throw error
}catch(e) {
    console.log(e);
}
//TestCase for countOfEachCharacterInString
let test = "Hello, the pie is in the oven";
console.log(lab2_u.countOfEachCharacterInString(test));