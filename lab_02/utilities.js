function checkObject(obj){
    if(typeof(obj) !== 'object') throw 'Input is not a Object';
    return obj;
};

function checkArray(arr){
    if(!Array.isArray(arr)) throw 'Input is not a Array';
    return arr;
};

function checkString(str){
    if(typeof(str) !== 'string') throw 'Input is not a String';
    return str;
};

function deepEquality(obj1,obj2){
    checkObject(obj1);
    checkObject(obj2);
    for(let key in obj1){
        if(typeof(obj1[key]) === 'object' && typeof(obj2[key]) === 'object'){
            if(!deepEquality(obj1[key],obj2[key])) return false;
        }
        else if(obj1[key] !== obj2[key]) return false;
    } 
    for(let key in obj2){
        if(typeof(obj1[key]) === 'object' && typeof(obj2[key]) === 'object'){
            if(!deepEquality(obj1[key],obj2[key])) return false;
        }
        else if(obj1[key] !== obj2[key]) return false;
    } 
    return true;
};

function uniqueElements(arr){
    checkArray(arr);
    let set = new Set();
    let count = 0;
    for(let i of arr) {
        if(!set.has(i)){
            count++;
            set.add(i);
        }
    }
    return count;
};

function countOfEachCharacterInString(str){
    checkString(str);
    let map = new Map();
    for(let i of str){
        if(!map.has(i)) map.set(i,1);
        else map.set(i,map.get(i)+1);
    }
    return map;
};

module.exports = {
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
};