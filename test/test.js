// let ex1 = document.getElementById("ex1");
// let input_ex1 = document.getElementById("input-ex1").innerHTML;
// console.log(input_ex1);
// // let submit_ex1 = document.getElementById("submit-ex1").addEventListener('onclick', printName());

// ex1.innerText = "text text text";

// let printName = function (name) {
//     ex1.innerText = `Hello ${name}`;
// };

// printName("Alice");

const add = function (a, b) {
    // let resultAdd = a + b;
    // return resultAdd;
    return a + b;
};

let rAdd = add(3, 2);

const multiply2 = function (resultAdd) {
    return 2 * resultAdd;
};

console.log(multiply2(rAdd));
