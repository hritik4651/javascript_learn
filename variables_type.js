// Variable Types

// # Primitive Types:

// 1. String: Textual data.
let a = 'Hello';
console.log(typeof (a) + ' - ' + a);


// 2. Number: Numeric data.
let b = 24;
console.log(typeof (b) + ' - ' + b);

// 3.Boolean: True or false.
let isAdmin = true;
console.log(typeof (isAdmin) + ' - ' + isAdmin);

// 4. Undefined: A variable that has been declared but not yet assigned a value.
let txt;
console.log(typeof (txt) + ' - ' + txt);

// 5. Null: Represents the intentional absence of any object value.
let val = null;
console.log(typeof (val) + ' - ' + val);

// 6. Symbol: A unique and immutable primitive value.
let symbolVar = Symbol('uniqe');
console.log(symbolVar);
// console.log(typeof(symbolVar)+' - '+(symbolVar));

// 7. BigInt: Represents integers of arbitrary length.
let num = 100000020202484962669999292n;
console.log(typeof (num) + ' - ' + num);


// # Object Types:

// 1. Object: A collection of properties.
let obj = {
     nam: 'hrx',
     isAdmin: true,
     no: 400000004651
};
console.log(obj);
console.log('no - ' + obj.no);

// 2. Array: An ordered list of values.
let arr = [5, 8, 2, 4, 5, 6, 7,];
console.log(arr);




/// # Additional

// * Hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined. Variables declared with let and const are hoisted but not initialized.
console.log(ab);
var ab = 545;

console.log(ab);

// console.log(bbb); // ReferenceError: Cannot access 'bbb' before initialization
let bbb = 2342;

// console.log(ccc); // ReferenceError: Cannot access 'ccc' before initialization
const ccc = 'coding';





// * Block Scope: let and const respect block scope, while var does not.
if (true) {
     var ax = 50; // var has no Block Scope.
     let bx = 100;
     const cx = 1000;
}
console.log(ax);
// console.log(bx); // ReferenceError: bx is not defined
// console.log(cx); // ReferenceError: cx is not defined

