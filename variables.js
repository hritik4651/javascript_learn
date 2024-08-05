// JavaScript Variable.

// Correct JavaScript variables.
var z = 18;
var _xyx = 'adult';

// Incorrect JavaScript variables.
// var 123 = 22;
// var *aa = 58;


// JavaScript local variable.
function abc() {
     var x = 10;//local variable  
     console.log('Local var - ' + x);
}
abc();


// JavaScript global variable.
var data = 200;//gloabal variable  
function fa() {
     console.log('Function 1 - ' + data);
}
function fb() {
     console.log('Function 2 - ' + data);
}
fa();//calling JavaScript function  
fb();





// # var
var a = 10;
var aa = 5;
console.log('a - ' + a);
if (true) {
     var aa = 15; // Allow Re-declare
}
console.log('aa - ' + aa); // Function Scope.



// # let
let b = 40;
// let b='zip'; // Identifier 'b' has already been declared.
console.log('b - ' + b);

if (true) {
     let bb = 45;
     console.log('bb - ' + bb); // Block Scope.
}
// console.log(bb); // ERROR :  bb is not defined.




// # const
const c = 3.14;
// const c='code'; // Identifier 'c' has already been declared.
// c = 'good' // TypeError: Assignment to constant variable.
console.log('c - ' + c);


