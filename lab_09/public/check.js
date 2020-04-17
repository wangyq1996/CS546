function btnClick(){
    const input = document.getElementById("input").value;
    palindromCheck(input);
}

function palindromCheck (s){
    if(!s) {
        alert("No Input in Textarea");
        return;
    }
    let temp = s.toLowerCase();
    let output = '';
    for(let i of temp) if(isNumber(i) || isWord(i)) output += i;
    let left = 0;
    let right = output.length-1;
    let TorF = true;
    while(left<right){
        if(output.charAt(left)!==output.charAt(right)){
            TorF = false;
            break;
        } 
        left++;
        right--;
    }
    addItem(s,TorF);
}

function isWord (c) {
    if(c.charCodeAt(0)-'a'.charCodeAt(0)>=0 && c.charCodeAt(0)-'a'.charCodeAt(0)<26) return true;
    return false;
}

function isNumber (c) {
    if(c.charCodeAt(0)-'0'.charCodeAt(0)>=0 && c.charCodeAt(0)-'0'.charCodeAt(0)<10) return true;
    return false;
}

function addItem(s,t){
    const ol = document.getElementById("attempts");
    let li = document.createElement('li');
    li.innerHTML = s;
    if(t) li.className="is-palindrome";
    else li.className ="not-palindrome";
    ol.appendChild(li);
}