// object

// singleton
// object.create



// object literals

let mySym = Symbol('m42');

const jsUser = {
     n1: "mark",
     id: 42,
     [mySym]: "42mark",
     isAdmin: true,
     lastLogIn: [0, 1, 2, 3, 4, 5]
};
// console.log(jsUser.n1);
// console.log(jsUser["n1"]);

// jsUser.fname = "mark42";
// jsUser["email"] = "mark42@stark.com";

// console.log(jsUser[mySym]);// Symbol

// Object.freeze(jsUser);
// jsUser.userId = `${jsUser.n1}${jsUser.id}`;
// console.log(jsUser);

jsUser.function11 = function () {
     console.log('Hello_javaScript');
}
jsUser.function22 = function () {
     console.log(`Name is ${this.n1}`); //this Key word
}

// console.log(jsUser.function22());





