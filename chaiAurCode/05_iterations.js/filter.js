//// # filter 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenArr = arr.filter((val) => val % 2 === 0)
// console.log(evenArr);

const oddArr = arr.filter((val) => {
     return val % 2 !== 0 // explicit return....!
})
// console.log(oddArr);



