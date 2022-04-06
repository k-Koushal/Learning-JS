let countEl=document.getElementById("passenger-count");
let count=0;
let saveEl=document.getElementById("saveStatement");

function increment(){
    count+=1;
    countEl.innerText=count;
}

function save(){
    let countStr=count+" - "
    saveEl.textContent+=countStr;
    count=0;
    countEl.innerText=count;
}
