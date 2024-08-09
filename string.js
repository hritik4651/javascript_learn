// String in JS


let str = "this is String."; //ex1
let str2 = '2nd String.'; //ex2

console.log(str);
console.log('str Length : ', str.length);// String method 
console.log(str[8]); // Spacific index value. 

console.log(str2);

// Template Literals [ A Way to have embedded expressions in string. ]
let a = 5;
let b = 8;
let res = `Addition of a: ${a} and b: ${b} is : ${a + b}`; //String Interpolation.
console.log(res);

// Escape Character 
console.log("Hello \n JavaScript");
console.log("Hello \t JavaScript");

// String Methods.
let newString = "      JavaScript Full Course";

let up = newString.toUpperCase();// Convert to UpperCase.
console.log(up);

let lo = newString.toLocaleLowerCase();// Convert to LowerCase.
console.log(lo);

let tr = newString.trim();// Trim Extra Spaces to start and end.
console.log(tr);

let sl = newString.slice(10, 17); // return Value 10 index to 16 .//Script
console.log(sl);

let con = newString.concat(str2); // Add 2 Strings 
console.log(con);

let con2 = newString + str2; // Add 2 Strings
console.log(con2);

let rep = newString.replace("Full","All"); //Replace A new value in String.
console.log(rep);

let ch = newString.charAt(10);
console.log(ch);
console.log(newString.charAt(11));
console.log(newString.charAt(12));
console.log(newString.charAt(13));
console.log(newString.charAt(14));
console.log(newString.charAt(15));