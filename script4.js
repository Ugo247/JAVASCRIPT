// Dom (Document Object Model) manupulation :
// The interaction or manupulation of a web browser or web page
// Using javaScript.
/// HTML Using JS

document.write("This is the first dom script");
document.write("<h1>Lets beging</h>");

// CSS Using JS
document.body.style.backgroundColor = "red";
document.body.style.color = "white";
document.body.style.fontSize = "3rem";
document.body.style.fontFamily = "cursive";

// Selecting Elements Using JavaScript
let button1 = document.querySelector(".click");
let button2 = document.querySelector(".unclick");
let title = document.querySelector("h1");

button1.style.backgroundColor = "green";
button1.style.color = "white";
button1.style.fontSize = "3rem";
button1.style.padding = "1rem";

button2.style.backgroundColor = "blue";
button2.style.color = "white";
button2.style.fontSize = "3rem";
button.style.padding = "1rem";

// Event Listeners - method used to create interactivity/user actions
// to the web browser.
// Evwnt Listeners Includes
// click, mouseover, mouseout, scroll, change, submit

button1.addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    document.body.style.fontFamily = "cursive";
    document.body.append("Button 1 clicked");
});

button2.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
    document.body.style.fontFamily = "helvetica";
    document.body.append("Button 2 clicked");
})

// Working With Inputs

const input = document.querySelector("input");
const taskBtn = document.querySelector(".taskBtn");

taskBtn.addEventListener("click", function(){
    document.body.prepend(input.value);
})










