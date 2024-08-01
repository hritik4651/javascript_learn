// JavaScript Functions.

//JavaScript Function Example
function myFunction() {
     let a = 10;
     let b = 20;
     let c = a + b;
     console.log('Addition of A and B - ' + c);
}
myFunction();

// JavaScript Function Arguments
function check(num) {
     let no = num;
     if (no % 2 == 0) {
          console.log('Number is Even.');
     } else {
          console.log('Number is Odd.');
     }
}
check(10);

// Function with Return Value
function returnValue() {
     return 'Hey, How are you. ?'
}

let hi = returnValue();
console.log(hi);


// JavaScript Function Object Examples.
let add = new Function("num1", "num2", "return num1 + num2");
let add1 = add(10, 20);
console.log(add1);

let str = new Function("arg", "return arg.toString()");
let data = str('start12345');
console.log(data);

// console.log(Date());

