// The map() method in JavaScript  {iterates over each element in an array}

//Syntax
/*
 array.map(function(currentValue, index, array) {
     // Return the new value for each element
 });
*/


const arr1 = [1, 2, 3, 4, 5];
let newArr1 = arr1.map((val,i) => {
     // return val**=i+1;
     console.log(val);
     arr1[i]=val**(i+1);
     return val*val;
});
console.log(`Exponential Array : ${arr1}`);
console.log(`Square Array : ${newArr1}`);




