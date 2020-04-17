const questionOne = function questionOne(arr) {
    return arr.reduce((acc,cur)=> acc += cur*cur ,0);
};

const questionTwo = function questionTwo(num) {
    if(num<=0) return 0;
    if(num === 1) return 1;
    let ary = new Array(num+1);
    ary[0] = 0;
    ary[1] = 1;
    for(let i=2;i<ary.length;i++) ary[i] = ary[i-1]+ary[i-2];
    return ary[num];
};

const questionThree = function questionThree(text) {
    let sum = 0;
    let set = new Set(['a','e','i','o','u','A','I','E','O','U']);
    for(let i of text) if(set.has(i)) sum++;
    return sum;
};

const questionFour = function questionFour(num) {
    //if(!Number.isInteger(num)) return "Invalid Input"
    if(num<0) return NaN;
    if(num === 0) return 1;
    return num*questionFour(num-1)
};

module.exports = {
    firstName: "Yuqi",
    lastName: "Wang",
    studentId: "10446070",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};