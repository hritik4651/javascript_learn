// objects

const appUser = new Object(); // singleton
const newUser = {}; // non-singleton

// console.log(appUser);
// console.log(newUser);

newUser.id = "mark42";
newUser.name = "mark";
newUser.isAdmin = true;

// console.log(newUser);

const oldUser = {
     email: "xyz123@mail.com",
     userName: "xyz123",
     fullName: {
          fName: "xyz",
          lName: "123"
     }
};
// console.log(oldUser.fullName.fName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj12 = Object.assign({}, obj1, obj2);
// console.log(obj12);

const obj123 = { ...obj1, ...obj2, ...obj3 };//spread Operator.
// console.log(obj123);

const data = [
     {
          userName: "n1",
          email: "e1"
     },
     {
          userName: "n1",
          email: "e1"
     },
     {
          userName: "n1",
          email: "e1"
     },
     {
          userName: "n1",
          email: "e1"
     },
     {
          userName: "n1",
          email: "e1"
     },
];
// console.log(data[0].userName);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// console.log(obj1.hasOwnProperty('1')); // true because checks on keys 
// console.log(obj1.hasOwnProperty('a')); // false it not check on Values.



//// # De-Structure.
const { userName } = oldUser; //De-Structure 
const { userName: uName } = oldUser; //De-Structure 
// console.log(userName);
// console.log(uName);

// JSON(JavaScript Object Notation) Formate
// {
//      "name": "mark",
//      "userName": "mark42"
// }