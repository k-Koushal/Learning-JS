console.log("hello");
// console.log("this is my first js code test");

// alert("Hello this is kk")

//Variables
// var b='something';
// console.log(b);
// var a=12
// console.log(a+" "+b);
// document.getElementById("someText").textContent="Hello World";


//Prompt
// var a=prompt("Hey!, What is your name?");
// console.log("Hello "+a);
// document.getElementById("someText").textContent="Hey!, its "+a;

// !Data Types in JavaScript:*/
// todo :1) Numbers: 
/* var num1=10;

console.log(num1);
num1++;
console.log(num1);
num1--;
console.log(num1);

console.log(num1*5);
console.log(num1/5);
console.log(num1%5);

console.log(num1+=10); */

//! Functions
/* function fun() {
    console.log('this is a function')
}
fun() */

// ?Lets create a function that takes in a name and says hellow followed by your name

/* function hellow(){
    let yourName=prompt("What is yot name?");
    console.log("Hello!! "+yourName)
    
}
hellow() */

//! how do arguments wok in functions?
//?How do we add two numbers in a function?

/* function sumNumbers(a,b){
    var result=a+b;
    console.log("the sum of the numbers is :"+result)

}
sumNumbers(10,20) */


//*Loops

// todo: While loops:
/* var num=0;
while(num<100){
    num+=1;
    console.log(num);
} */
//todo: For loops: 
/*  for(let num=0; num<=100;num++ )
 {
     console.log(num)
 } */

 //!Data Types in JavaScript:
 //* Numbers
 //* Strings
 //* Objects(Dictionary)
 //* Boolean
 //* array(Lists)
 //* undefined
 //* Null

 //! String Methods
/*  let fruit="banana"
 console.log(fruit.length);
 console.log(fruit.indexOf('nan'));
 console.log(fruit.slice(2,5));
 console.log(fruit.replace('nan','123'));
 console.log(fruit.toUpperCase());
 console.log(fruit.toLowerCase());
 console.log(fruit.charAt(1)); //or
 console.log(fruit[1]);
 console.log(fruit.split("")); //?returns an array ['b', 'a', 'n', 'a', 'n', 'a'] */

/*  var fruits='apple,banana,orange';
 console.log(fruits.split(",")); //? returns an array ['apple', 'banana', 'orange']
 console.log(fruits.split(""))
 //! Note: " .split() function works only for 'strings' "
. */
 

//  //* Arrays
// let fruits= ['apple','banana','orange'];
//  console.log(fruits[2]);
//  fruits[0]="Kiwi"; //? unlike strings, lists are Mutable.
//  console.log(fruits); //? returns ['Kiwi', 'banana', 'orange']

 /* //todo: doing the same using For-loop
 for(let i=0; i<fruits.length;i++){
     console.log(fruits[i])
 }
 */

 //! Array Methods 
let fruits= [1,'banana','orange'];
    console.log('to string ', fruits.toString())
    console.log("Joining ", fruits.join("-")) //?Joins the values with "-".
    console.log("popping :", fruits.pop(),"\nremaining list:",fruits); //? pops the last value of the Array

    fruits= [1,'banana','orange'];
    console.log("Shift means removes the fist list item :", fruits.shift(),fruits); //? removes first element of the Aray
    console.log("'unshift' means adds the fist list item :", fruits.unshift('new item'),fruits); //? adds first element to the Array

    console.log("Push :",fruits.push('norway'),"\nfinal list:",fruits) //? basically appends a new item at the end of the list

     


 





