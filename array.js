// Array in JS [ Non-Primitive DataType. ]

let ar1 = [1, 2, 3, 4, 5];
let ar2 = ["armor", "mark I", "mark II", "mark IV"];
let ar3 = [1, "abcd", 2, "hrx", 3, "hrz"];

ar3[1] = "gen";//Mutable [ we can change value of array index in Array. ]

console.table(ar1);
console.log(ar1.length);//Property

console.log(ar2[2]);
console.log('changed : ' + ar3[1]);

console.log(ar1[5]);//undefined because index of 5 is not exist.

console.log('Array 1 ::::::::::::::::: using For Loop');
for (let i = 0; i < ar1.length; i++) { // Using For Loop.
     console.log(ar1[i]);
}

console.log('Array 2 ::::::::::::::::::::::::  using For of Loop');
for (let val of ar2) { // Using For of Loop.
     console.log(val.toLocaleUpperCase());
}

if (false) {
     let marks = [96, 98, 89, 90, 93, 85];
     let sum = 0;
     for (let val of marks) {
          sum += val;
     }

     let avg = sum / marks.length;
     console.log(`Average Marks : ${avg}`);
}

if (false) {
     let item = [350, 954, 7245, 84];
     for (let i = 0; i < item.length; i++) {
          let offer = item[i] / 10;
          item[i] -= offer;
          console.log(`Item ${i} New Price is : ${item[i]} `);
     }
}

let arrOpera = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let test = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log("Original Array :::::::::::::::::::::::::::::::::::::::::::::::::  " + arrOpera);

arrOpera.push(200);//Add Value to End.
console.log('After Push A Value :--  ' + arrOpera);

arrOpera.unshift(0);//Add Value to Start.
console.log('After unshift A Value :--- ' + arrOpera);

let delEnd = arrOpera.pop();//Delete Value From End & REturn.
console.log('Pop Value : ', delEnd);
console.log("After Pop :-  " + arrOpera);

let delStart = arrOpera.shift();//Delete Value From Start & REturn.
console.log('Shift Value : ', delStart);
console.log("After Shift :-  " + arrOpera);

let strArr = arrOpera.toString();// Converts To String.
console.log(typeof (strArr) + " :- " + strArr);
// console.log(strArr);

let concatArr = test.concat(arrOpera); // Join Multiple Array & Returns Result.
console.log("Concat 2 Array :--  " + concatArr);

let sliceArr = arrOpera.slice(4, 8);// Return a piece of Array.
console.log('Sliced Array :-  ' + sliceArr);

let spliceArr = arrOpera.splice(4, 1, 500);// change original array (add, remove, replace)
console.log('Splice Array :-  ' + spliceArr);
console.log('After Splice :-  ' + arrOpera);