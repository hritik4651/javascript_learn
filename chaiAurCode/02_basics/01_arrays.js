// Array 

const myArr1 = [2, 4, 6, 8, 10, 12, 14, 16];
const myArr2 = ["IronMan", "Mark42", "Ultron"];
// console.log(myArr1[0]);
// console.log(myArr2[1]);

const myArr3 = new Array(10, 20, 30, 40, 50);

// myArr3.push(60);
// console.log(myArr3);

// myArr3.pop();
// console.log(myArr3);

// myArr3.unshift(5);
// console.log(myArr3);

// myArr3.shift();
// console.log(myArr3);

// console.log(myArr3.includes(30));//checks value in Array.
// console.log(myArr3.indexOf(20));//1

const newArr = myArr3.join(); // convert into String
// console.log(typeof newArr);// string
// console.log(newArr);

console.log(`Original : ${myArr3}`);
const newArr1 = myArr3.slice(2, 4);
console.log(newArr1);
console.log(`Original : ${myArr3}`);

const newArr2 = myArr3.splice(2, 4); // it's perform on real value.
console.log(newArr2);
console.log(`Original : ${myArr3}`);