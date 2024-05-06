'use strict'

//console.log('Nhung xinh dep');
//alert("I'm Nhung");

//alert("I'm Nhung dungdinh");
//console.log('Nhung ngoc nghech');
//let fullName="John Pham";
//let pageAdmin;
//pageAdmin = fullName;
//alert(fullName+' '+'xinh dep');

//console.log(fullName);
//console.log(pageAdmin);

// let age1 = 3;
// let age2 =5;
// let compareValues = age2>age1;
// alert(compareValues);

// let name = "Ilya";

// alert( `hello ${1}` ); 

// alert( `hello ${"name"}` ); 

// alert( `hello ${name}` ); 
// alert( 'hello' +' ' + name ); 

// let message = prompt("how old are y?", 18);
// alert (`user's age is ${message}`);

// let result = confirm(`are you over 18?`);
// alert(`user choses ${result}`);

// alert(2**'3');

// let x = "3";
// let y = "5";
// alert(-x - -y);

// let a = 1, b = 1;

// let c = ++a; 
// let d = b++; 
// alert (a);
// alert (b);
// alert (c);
// alert (d);

// let counter = 1;
// let a1 = counter++; // (*) changed ++counter to counter++
// alert(counter);
// alert(a1); // 1

//let result = Number(null);
//alert(result);
//alert(null===+"\n0\n");

//let result = prompt(`what's the "official" name of JavaScript`,"");
//if(result=="ECMAScript"){
//    alert("Right!")
//}
//else{
//    alert(`You don't know? "ECMASCript"!`)
//};
//let value = prompt(`what's the "official" name of JavaScript`,"");
//value =="ECMAScript"? alert("Right!"): alert(`You don't know? "ECMASCript"!`);

//let value = prompt(`what's the "official" name of JavaScript`,"");
//let message = (value=="ECMAScript")?  "Right!": 
//`You don't know? "ECMASCript"!`;
//alert(`${message}`);
//let a= prompt("a",'');
//let b = prompt("b",'');

//let result = (+a+ +b<4)? 'Below':'Over';
//alert(result);

//let userAccount = prompt("which account do you use?","");
//let message = (userAccount=='Employee')? "Hello":
//userAccount=="Director"? "Greetings":
//userAccount==""? "No login":
//"";
//alert(message);

// let num = prompt("cho mot con so","");
// let result = Number(num);
// alert(result);
//alert( alert(1) );

//alert( null || 2 || undefined );
// let userName = prompt(`whos there?`,'');
// if(userName ==''||userName ==null){
//     alert("canceled")
// }
// else if (userName !='Admin'){
//     alert(`I don't know you`)
// }
// else{
//     let password = prompt(`Password?`,'');
//     if(password==''||password==null){
//         alert("canceled")
//     }
//     else if (password=='TheMaster'){
//         alert('Welcome!')
//     }
//     else {
//         alert('wrong password')
//     }
// }

//vong lap: loop 3 loai

//while loop
// let i =3;
// while(i){
// alert(i--);
// };

// let i =0;
// while(i++<5) alert (i);

// let i =0;
// while(i<3){
//     alert(`number ${i}`);
//     i++;
// };


//for loop
// for(let i=0; i<3;i++){
//     alert(`numer ${i}`);
// };

// let i = prompt("input a number",'');
// for(i;i<=100;i){
//     if(!i) break;
//     i = prompt("input a number",'');
// };
// let n= prompt('input number?','');
// nextPrime:
// for(let i=2 ;i<=n;i++){
//     for(let j =2; j<i; j++){
//         if(i%j==0) continue nextPrime;
//     };
//     alert(i);
// };

//do while loop
// let i;
// do {
//     prompt(`input a number`,'');
// }
// while(i<=100 && i);

// let a= +prompt(`a?`,'');
// switch(a){
//     case 0:
//         alert(0);
//         break;
//     case 1: 
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');   
//         break; 
// }
// let from = "Ann";

// function showMessage(from, text) {

//     from = 'pham' + from + '*';
  
//     alert( from + ': ' + text );
//   }
  
  
  
//   showMessage(from, "Hello");
  
 
//   alert( from ); 



//   function showMessage(from, text) { 
//     alert(from + ': ' + text);
//   }
  
//   showMessage('Ann', 'Hello!'); 
//   showMessage('Ann', "What's up?"); 

// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );

// let result ="nhung";
// alert(!result);

// for (let i = 0; i < 10; i++) {

//     // if true, skip the remaining part of the body
//     if (i  == 3) continue;
  
//     alert(i); // 1, then 3, 5, 7, 9
//   }

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too big' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }


// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//   case 4:
//     alert( 'Exactly!' );
//   case 5:
//     alert( 'Too big' );
//   default:
//     alert( "I don't know such values" );
// }


// let a = 4;

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }


// let arg = prompt("Enter a value?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'One or zero' );
//     break;

//   case '2':
//     alert( 'Two' );
//     break;

//   case 3:
//     alert( 'Never executes!' );
//     break;
//   default:
//     alert( 'An unknown value' );
// }

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// let a =+ prompt('a?','');
// switch(a){
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2,3');
//     break;     
// }


// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob
//   alert(message);
// }

// // the function will create and use its own userName
// showMessage();

// alert( userName );


// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('How old are you?', 18);

// function showMovie(age) {
//   if ( !checkAge(age) ) {
//     return confirm('Sorry! This film does not fit you');
//   }

//   alert( "Showing you the movie" ); // (*)
//   // ...
// };
// showMovie(age);

// let age = prompt("how old are y?",18);
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// };
// checkAge(age) ;

// let sayHi = function(name) {  // (*) no magic any more
//   alert( `Hello, ${name}` );
// };
// sayHi("John"); 

// sayHi("John"); // Hello, John

// function sayHi(name) {
//   alert( `Hello, ${name}` );
// }
// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   () => alert('Hello!') :
//   () => alert("Greetings!");

// welcome();

//C1
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

//C2
// let ask = (confirm("Do you agree?"))?
// () =>{alert("you agreed.")}:
// () =>{alert ("you canceled the execution.")};

// ask();

// //C3
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

let myArray =[1,'nhung',2,'sun'];
console.log(myArray);