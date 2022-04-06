let number1=8
let number2=2;
let n1=document.getElementById("num1");
let n2=document.getElementById("num2");
let res=document.getElementById("result")
n1.textContent= number1;
n2.textContent=number2;
function addition(){
    res.innerText= "Result : "+(number1+number2);
}
function substraction(){
    res.innerText= "Result : "+(number1-number2);
}
function multiplication(){
    res.innerText= "Result : "+(number1*number2);
}
