//*method 1
//!Easy Method
/* var result=document.getElementById('result')
console.log(result)


function click_me(){
    var birthYear=prompt('Enter your birth year');
    var answer=(2022-birthYear)*365;
    result.innerText=("Age in Days: "+answer)

}
function reset(){
    result.innerText='_'
} */

//* Method 2
//! createElement()
//! setAttribute()
//!appendChild()
//! .remove()

function click_me(){
    var birthYear=prompt('Enter your Birth Year: ')
    var result= (2022-birthYear)*365;
    var h1=document.createElement('h1')
    var answer=document.createTextNode('You are : '+result+' Days old')
    h1.setAttribute('id','resultText')
    h1.appendChild(answer)
    document.getElementById('result').appendChild(h1)
}
function reset(){
   document.getElementById('resultText').remove();
} 