// The reduce() method in JavaScript  {iterates over each element in an array}

//Syntax
// array.reduce(callbackFunction(accumulator, currentValue, index, array), initialValue);

const arr1 = [1, 2, 3, 4, 5];

let sumArr = arr1.reduce((res,cur) => {
     console.log(`${res} : ${cur}`);
     return res+cur;
});
console.log(`Sum of Array : ${sumArr}`);


const arr2 = [4,8,2,6,33,9];
let large = arr2.reduce((res,cur)=>{
     return res>cur?res:cur;
});
console.log(large);


const arr3 =[1,2,3,4,5];
let proArr = arr3.reduce((res,cur)=>{
     return res*cur;
});
console.log(`Product of Array (Factorial) : ${proArr}`);
