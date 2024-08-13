// JavaScript Functions.

//JavaScript Function Example
function myFunction() {
     let a = 10;
     let b = 20;
     let c = a + b;
     console.log(`Addition of ${a} and ${b} : ${c}`);
}
myFunction();

// JavaScript Function Arguments
function check(num) {
     let no = num;
     if (no % 2 == 0) {
          console.log(`Number [${no}] is : EVEN`);
     } else {
          console.log(`Number [${no}] is : ODD`);
     }
}
check(2000);

// Function with Return Value
function multiFunc(a, b) {
     let x = a;
     let y = b;
     return (x * y);
}
let res = multiFunc(2, 6);
console.log(res);


// JavaScript Function Object Examples.
let add = new Function("num1", "num2", "return num1 + num2");
let add1 = add(10, 20);
console.log('Addition : ' + add1);


// Arrow function. [ES6 Feature.]
let addVal = (a, b) => {
     return a + b;
}
let multiVal = (x, y) => {
     return x * y;
}
console.log(addVal(2, 8));
console.log(multiVal(5, 5));

let vowCount = (str) => {
     const vow = 'aioueAIOUE';
     let st = str;
     let count = 0;
     for (const Value of st) {
          for (const val of vow) {
               if (Value == val) {
                    count++;
               }
          }
     }
     return count;
}
console.log(vowCount("javascript"));



