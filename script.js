let circle = document.getElementById("circle");
let rectangle = document.getElementById("rectangle");
let context = rectangle.getContext("2d");
let button1 = document.getElementById("button1");

button1.onclick = function() {
    circle.style.top = "100px"
};

button2.onclick = function() {
    rectangle.style.left = "100px"
};

