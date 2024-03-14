// Write your code here!
// Remove the <main> element with the id "main"
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element and set its id to "victory"
const newHeader = document.createElement("h1");
newHeader.id = "victory";

// Set the text content of the newHeader variable to "John-Alexander Kamau is the champion"
newHeader.textContent = "John-Alexander Kamau is the champion";

// Append the newHeader to the document body or any other desired location
document.body.append(newHeader);