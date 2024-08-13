// The forEach() method is a higher-order function {iterates over each element in an array}

//Syntax
// array.forEach(callbackFunction(currentValue, index, array));

const arr1 = [1, 2, 3, 4, 5];

arr1.forEach((val, i) => {
     arr1[i] = val * val;
     console.log(`${i} : ${val}`);
});
console.log(arr1);

const arr2 = ['john', 'harry', 'mark42'];
arr2.forEach((val,i) => {
     arr2[i]=val.toUpperCase()
});
console.log(arr2);

let sum = (no) => {
      no+=no;
      console.log(no);
}

arr1.forEach(sum);

// let newArr = arr1.forEach(sum); // it's not return new Array.
// console.log("::::::::",newArr);// undefined 