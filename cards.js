console.log("cards.js");

let submitBtn = document.getElementById("submit");
let userInput = document.getElementById("text-area").value;
let container = document.getElementById("container");
let card = container.innerHTML;

submitBtn.addEventListener("click", (event) => {
    console.log("this submit btn works")
});


