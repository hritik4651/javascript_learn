//// # map 

const myNums = [2, 4, 6, 8, 10, 12, 14, 16]

const newNum = myNums.map((val) => val + 1)
// console.log(newNum);

const newNum2 = myNums
     .map((val) => val * 10) // chaining
     .map((val) => val + 1)
     .filter((val) => val > 100)

// console.log(newNum2);





