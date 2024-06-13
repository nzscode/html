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
