// 4) JavaScript for in loop.

//Syntax

// for (variable in object)
//     statement


let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

for (let key in person) {
    console.log(`${key} : ${person[key]}`);
    if (key == "age") {
        if (person["age"] > 25) {
            console.log('Found Itttttt.....');
        }
    }
}