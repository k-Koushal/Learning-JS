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
/* let fruits= [1,'banana','orange'];
    console.log('to string ', fruits.toString())
    console.log("Joining ", fruits.join("-")) //?Joins the values with "-".
    console.log("popping :", fruits.pop(),"\nremaining list:",fruits); //? pops the last value of the Array

    fruits= [1,'banana','orange'];
    console.log("Shift means removes the fist list item :", fruits.shift(),fruits); //? removes first element of the Aray
    console.log("'unshift' means adds the fist list item :", fruits.unshift('new item'),fruits); //? adds first element to the Array

    console.log("Push :",fruits.push('norway'),"\nfinal list:",fruits) //? basically appends a new item at the end of the list */

/*     let vegetables=['broccoli','tomato','chow chow'];
    let fruits= [1,'banana','orange'];
    console.log(vegetables+fruits) //? Array Concatination
    console.log(vegetables.slice(1,3)) //?slicing
    console.log(vegetables.reverse())  //?reverse the list order
 */
/*     
      let vegetables=['abbs','broccoli','tomato','chow chow'];
      console.log(vegetables.sort()) //?alphabetical sorting
 */


//!to sort Numbers,you need to add a function to the sort() function. 
/*    let someList=[1,2,55,23434,56,1234,7,8,9,0,13]
   console.log(someList.sort(function(a,b) {return a-b}))//? Ascending order
   console.log(someList.sort(function(a,b) {return b-a}))//? Descending order

 */
//!working with empty Arrays: 
/*   let emptyArray=new Array();
  for (let num=0; num<10;num++){
      emptyArray.push(num)
  }
  console.log(emptyArray) */

//* Objects in JavaScript (or) Dictionaries in Python:
/* let student = {
    firstName: "Koushal",
    lastName: "kandagatla",
    age: 26,
    height: '165 Cm',
    studentInfo: function () {
        return this.firstName + '\n' + this.lastName+ '\n'+this.age+'\n'+this.height; //?Object Oriented Programming in a JavaScript Object
    }
}; */
/* console.log(student.firstName);
console.log(student.lastName); */
// todo: Note: you can't access objects using Indices in JavaScript
/* console.log(student.age++);
console.log(student); */
/* console.log(student.studentInfo())  */

//* if-else & Conditional Statements in JS:
//! $$ AND
//! || or
/*  var age=prompt("What is you")
 if ((age>=18)&&(age<=35)){
    var status='target demo';
    console.log(status)
 } else{
     var status='not my audience'
     console.log(status)
 } */


//*Switch Statements
//? differentiate bw week-day & weekend 
//? day0=sunday ==> day6=Saturday & day4= Thursday
/* switch (6) {
    case 0:
        text = 'Weekend'
        break;
    case 5:
        text = 'weekend'
        break;
    case 6:
        text = 'Weekend'
        break;
    default:
        text = 'Week-Day'
}
console.log(text) */

//*Json
//! format: Array with Objects inside it.
//! JSON is pure JavaScript
//! when you try to print a JSON file, the file is interpreted as a String & entire data is printed-out.
//! "JSON.parse(file_name)" print the correct format of a JSON file, whilst also applying Array methods on the JSON file.
