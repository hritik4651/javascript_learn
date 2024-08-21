//// # reduce

const arr = [1, 2, 3, 4, 5]

const newArr1 = arr.reduce((accu, currval) => { return accu + currval }, 0)

// console.log(newArr1);


const calPrice = [
     {
          id: "p1",
          price: 258
     },
     {
          id: "p2",
          price: 456
     },
     {
          id: "p3",
          price: 654
     },
     {
          id: "p4",
          price: 852
     },
]

// const total = calPrice.reduce((tot, item) => tot + item.price, 0)
// console.log(total);