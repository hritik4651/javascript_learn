// 4) JavaScript for in loop.

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};


for (let key in person) {

    console.log(key + ' : ' + person[key]);
    if (key == "age") {
        if (person["age"] > 25) {
            console.log('Found Itttttt.....');
        }
    }
}