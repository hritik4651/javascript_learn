// Variables in JS

fullName = "mark42"; // not a Standard Way.
var name1 = 'mark'; // prefer not to Use. because it has Scope Issues.

// generally we use these two.
let age = 24;
const id = 42;

age = 25; //it can be change.
console.log(age);

// id = '42mark'; // we can't Update Constant Variable.

console.table([name1, age, id, fullName]);



