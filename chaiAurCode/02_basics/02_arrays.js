// array.

const marvel = ["ironman1", "ironman2", "ironman3"];
const dc = ["batman", "superman", "aquaman"];

// marvel.push(dc); // it's create array in array.
// console.log(marvel);
// console.log(marvel[3][0]);

const all = marvel.concat(dc); // for concat two arrays. 
// console.log(all);

const all2 = [...marvel, ...dc]; // spread operator.
// console.log(all2);

const arr1 = [1, 2, 3, [4, 5, 6, 7, [8, 9]]];
const newArr1 = arr1.flat(Infinity); // make a single array.
// console.log(newArr1);

console.log(Array.isArray(newArr1)); // check is array or not
console.log(Array.isArray("ironman")); // not a array
console.log(Array.from("ironman")); // create array and fill all string character in array.
console.log(Array.from({ name1: "ironman" })); // give Empty array.

let c1 = 50;
let c2 = 500;
let c3 = 5000;

console.log(Array.of(c1, c2, c3));// create Array and fill all Values in array.



