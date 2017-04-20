console.log("cards.js");

var textArea = document.getElementById("text_area");
var card = document.getElementById("card");
// var node = document.createTextNode("div");
// node.appendChild("newCard");
// document.getElementById("card").appendChild(node)

var button = document.getElementById("submit").addEventListener("click", function(submit){
	console.log("userText", textArea.value);

})

var deleteCard = document.getElementById("delete").addEventListener("click", function(removeItem){
	console.log("delete button works now.");
});