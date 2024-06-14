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

function sayHello5() {
    var nameInput = document.getElementById("fname5").value;
    var pResult = document.getElementById("inpResult5");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}

function sayHello6() {
    var nameInput = document.getElementById("fname6").value;
    var pResult = document.getElementById("inpResult6");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}

function sayHello7() {
    var nameInput = document.getElementById("fname7").value;
    var pResult = document.getElementById("inpResult7");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}

function sayHello8() {
    var nameInput = document.getElementById("fname8").value;
    var pResult = document.getElementById("inpResult8");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}

function sayHello9() {
    var nameInput = document.getElementById("fname9").value;
    var pResult = document.getElementById("inpResult9");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}

function sayHello10() {
    var nameInput = document.getElementById("fname10").value;
    var pResult = document.getElementById("inpResult10");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}

function sayHello11() {
    var nameInput = document.getElementById("fname11").value;
    var pResult = document.getElementById("inpResult11");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}

function sayHello112() {
    var nameInput = document.getElementById("fname12").value;
    var pResult = document.getElementById("inpResult12");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}

function sayHello13() {
    var nameInput = document.getElementById("fname13").value;
    var pResult = document.getElementById("inpResult13");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}

function sayHello14() {
    var nameInput = document.getElementById("fname14").value;
    var pResult = document.getElementById("inpResult14");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}

function sayHello15() {
    var nameInput = document.getElementById("fname15").value;
    var pResult = document.getElementById("inpResult15");
    var message = `Hello ${nameInput}`;
    pResult.textContent = message;
}

var button16 = document
    .getElementById("button16")
    .addEventListener("click", sayHello16);

function sayHello16() {
    var nameInput = document.getElementById("fname16").value;
    var pResult = document.getElementById("inpResult16");
    var message = `Hello 16th Try: ${nameInput}`;
    pResult.textContent = message;
}

var button17 = document.getElementById("button17");
button17.onclick = sayHello17;

function sayHello17() {
    var nameInput = document.getElementById("fname17").value;
    var pResult = document.getElementById("inpResult17");
    var message = `Hello 1....7: ${nameInput}`;
    pResult.textContent = message;
}

var button18 = document
    .getElementById("button18")
    .addEventListener("click", sayHello18);

function sayHello18(event) {
    this.textContent = "Thsi button was clicked";
    var nameInput = document.getElementById("fname18").value;
    var pResult = document.getElementById("inpResult18");
    var message = `Hello ${nameInput}, The button text has changed`;
    pResult.textContent = message;
}
