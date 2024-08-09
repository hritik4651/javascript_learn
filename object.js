// // JavaScript Objects.

// /////// Creating Objects.

// /// 1) JavaScript Object by using object literal

let person = {
     firstName: "John",
     lastName: "Doe",
     age: 30,
     hello: function() {
          console.log('Hello_World');
     }
};
console.log(person);

// Dot notation
console.log(person.firstName); // John
person.age = 31;

// Bracket notation
console.log(person["lastName"]); // Doe
person["age"] = 32;


// /// 2) By creating instance of Object directly (using new keyword)

let obj1 = new Object();
obj1.id = 101;
obj1.Lname = "Shankar";
obj1.number = 0;
console.log(obj1);
