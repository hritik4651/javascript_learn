// The filter() method in JavaScript  {iterates over each element in an array}

// Syntax
// array.filter(callbackFunction(element, index, array))

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArr = arr1.filter((val) => {
     return val%2===0;
});
console.log(`Even Numbers in Array : ${evenArr}`);

let dividedByThree = arr1.filter((val)=>{
     return val%3===0;
});
console.log(`Numbers who Divided by 3 : ${dividedByThree}`);

const marks = [87,72,92,45,81,97,90];

let aboveMarks = marks.filter((val)=>{
     return val>90;
});
console.log(`Above 90 Marks : ${aboveMarks}`);