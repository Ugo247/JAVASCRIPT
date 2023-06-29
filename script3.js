// Array methods
// push
// pop
// shift
//unshift
// spread
// reverse
// find
// filter
// map


let array = ["a", "b", "c", "d", "e", "f",];
array.push("g", "1", "z");
console.log(array);
// pop = removes an item from the end of an array
array = ["a", "b", "c", "d", "e", "f",];
array.pop();
array.pop();
console.log(array);
// start = removes an item from the start of an array
array = ["a", "b", "c", "d", "e", "f",];
array.shift();
console.log(array);
// unshift = adds item(s) to the start of an array
array = ["a", "b", "c", "d", "e", "f",];
array.unshift("g", "1", "z");
console.log(array);
// Spread Operator
array = ["a", "b", "c", "d", "e", "f",];
let newArray = [...array, "g", "h", "i",];
console.log(newArray);
// reverse
console.log(array.reverse());
// find
let studentsArray = [
    { id: 12, name: "jane", gender: "f" },
    { id: 13, name: "Rabo", gender: "m" },
    { id: 34, name: "Gertrude", gender: "f" },
    { id: 38, name: "Nonye", gender: "m" }
];

let student = studentsArray.find(x => x.id === 34);
console.log(student);
// filter
let femaleStudents = studentsArray.filter(x => x.gender === "f")
console.log(femaleStudents);
// map function => assignment

// FUNCTIONS
function doSomething(parameter) {
    // write the code you want the function to run
};

const doSomethingElse = (parameter1, parameter2) => {
    // write the code you want the function to run
};

function addNumbers(x, y, z) {
    console.log(x * y * z);
}

addNumbers(3, 5, 8);
addNumbers(2, 15, 10);

function pythagoras(opp, adj) {
    // 1st Method
    console.log( (opp**2 + adj**2) **0.5)
    // 2nd Method
    // console.log( Math.sqrt(opp**2 + adj**2) );
};

