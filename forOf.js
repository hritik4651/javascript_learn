// For of Loop. [It is Use to iterate Strings and Array.]

let count1 = count2 = 0;

let str = "iLoveJavaScript";
let arr = [1, 2, 2, 2, 'fsdf', 6, 2, 2, 58, 845, 'hjk', 'ewrww'];

for (let val of str) {
     console.log(val);
     count1++;
}
console.log('Tottal Length of STRING : ', count1);

for (let val of arr) {
     console.log(val);
     count2++;
}
console.log('Tottal Length of Array : ', count2);