const obj = {
    totalLetters:0,
    totalNonLetters:0,
    totalVowels:0,
    totalConsonants:0,
    totalWords:[],
    uniqueWords:0,
    longWords:0,
    averageWordLength:0,
    wordOccurrences:{}
}

function checkInput(text){
    if(typeof text !== 'string') throw 'Input is not a String';
    return text;
}

function checkLetterOrNot(c){
    if(c.charCodeAt(0)-'a'.charCodeAt(0)>=0 && c.charCodeAt(0)-'a'.charCodeAt(0)<26) return true;
    return false;
}

function checkVowelsOrConsonants(c){
    if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') return true;
    return false;
}

function createMetrics(text){
    checkInput(text);
    let tempString = '';
    let totalWordsList = [];
    for(let c of text){
        //Letters or Not
        c = c.toLowerCase();
        if(checkLetterOrNot(c)) {
            tempString += c;
            obj.totalLetters++;
            //Vowels or Consonants
            if(checkVowelsOrConsonants(c)) obj.totalVowels++;
            else obj.totalConsonants++;
        }
        else {
            obj.totalNonLetters++;
            if(tempString.length !== 0){
                if(!totalWordsList.includes(tempString)) obj.uniqueWords++;
                if(tempString.length >= 6) obj.longWords++;
                totalWordsList.push(tempString);
                tempString = '';
            }
        }        
    }
    obj.totalWords = totalWordsList.length;
    for(let c of totalWordsList){
        obj.averageWordLength += c.length;
        if(obj.wordOccurrences[c] !== undefined) obj.wordOccurrences[c]++;
        else obj.wordOccurrences[c] = 1;
    }
    obj.averageWordLength /= obj.totalWords;
    return obj;
}

module.exports = {
    createMetrics,
}