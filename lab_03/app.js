const fileData = require("./fileData");
const textMetric = require("./textMetrics");
const fs = require('fs');
const path = "./chapter1.result.json";

async function main(){
    try{
        if(fs.existsSync(path)) console.log(await fileData.getFileAsJSON(path)); 
        else throw err;
    }catch(err){
        let str =await fileData.getFileAsString("./chapter1.txt");
        await fileData.saveJSONToFile(path,textMetric.createMetrics(str));
    }
}

main();