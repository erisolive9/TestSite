let circle = document.getElementById("circle");
let rectangle = document.getElementById("rectangle");

let button1 = document.getElementById("button1");
let button3 = document.getElementById("button3");
let header = document.querySelector("h1");
let text = document.querySelector("p");


header.onclick = function() {
    header.innerHTML = "Hello World!"
};

button1.onclick = function() {
    circle.style.top = "100px"
};

button2.onclick = function() {
    rectangle.style.left = "100px"
};

button3.onclick = function() {
    text.style.animation = "rotate 2s"
};

