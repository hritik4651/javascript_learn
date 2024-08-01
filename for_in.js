// 4) JavaScript for in loop.

let person = {
     firstName: "John",
     lastName: "Doe",
     age: 30
 };

 
 for (let key in person) {
     // if (Object.hasOwnProperty.call(object, key)) {
     //      const element = object[key];
          
     // }

     console.log(key + ' : ' + person[key]);
 }