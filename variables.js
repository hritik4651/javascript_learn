//Variables.

// # var
var a=10;
var aa=5;
console.log(a);
if (true) {
     var aa=15; // Allow Re-declare
}
console.log(aa); // Function Scope.

// # let
let b=40;
// let b='zip'; // Identifier 'b' has already been declared.
console.log(b);
if (true) {
     let bb=45;
     console.log(bb); // Block Scope.
}
// console.log(bb); // ERROR :  bb is not defined.


// # const
const c=3.14; 
// const c='code'; // Identifier 'c' has already been declared.
console.log(c);


