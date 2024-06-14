// Function - only invoked when called
function a() {
    console.log("hello");
}
a();
//Output:
//hello

// Function saved as variable - only invoked when called
var b = function () {
    console.log("hello coursera");
};

b();
//Output:
//hello coursera

// Immediately Invoked Function (IIFE)
(function () {
    console.log("hello udemy");
})();
//Output:
//hello udemy

// IIFE with variable
(function (fname) {
    console.log("good morning " + fname);
})("Claire");
//Output:
//good morning Claire

(function (window) {
    var greeter = {};
    greeter.name = "jenny";
    var greeting = "Hello";
    greeter.sayHello = function () {
        console.log(greeting + greeter.name);
    };

    window.greeter = greeter;
})(window);

function sayHello1() {
    var nameInput = document.getElementById("fname1").value;
    console.log("Hello " + nameInput);
}

function sayHello2() {
    var nameInput = document.getElementById("fname2").value;
    var pResult = document.getElementById("inpResult2");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}

function sayHello3() {
    var nameInput = document.getElementById("fname3").value;
    var pResult = document.getElementById("inpResult3");
    var message = `<h2> Hello ${nameInput} </h2>`;
    pResult.innerHTML = message;
}

function sayHello4() {
    var nameInput = document.getElementById("fname4").value;
    var pResult = document.getElementById("inpResult4");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}
