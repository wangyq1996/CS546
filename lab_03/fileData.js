const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

function checkString(text){
    if(typeof text !== 'string') throw "Input text is not String";
    else return text;
}

function checkObject(obj){
    if(typeof obj !== 'object') throw "Input obj is not Object";
    else return obj;
}

async function getFileAsString(path){
    checkString(path);
    if(!path) throw "Invalid Input";
    const data = await fs.readFileAsync(path,"utf-8");
    return data;
};

async function getFileAsJSON(path){
    const data = await getFileAsString(path);
    let JSONoutput = JSON.parse(data);
    return JSONoutput;
};

async function saveStringToFile(path,text){
    checkString(path);
    checkString(text);
    if(!path || !text) throw "Invalid Input";
    return await fs.writeFileAsync(path,text);
};

async function saveJSONToFile(path,obj){
    checkString(path);
    checkObject(obj);
    if(!path) throw "Invalid Path";
    if(typeof obj !== 'object') throw "Input is not a Object";
    let data = JSON.stringify(obj,null,2);
    return await fs.writeFileAsync(path,data);
    
};

module.exports = {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
};
