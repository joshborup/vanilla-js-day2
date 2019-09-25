// console.log(window);
// document.getElementById("mybutton").onclick = function() {
//   alert("youve been alerted");
// };

// document.body.onclick = function() {
//   alert("you clicked the body");
// };

// document.getElementById("mybutton").onclick = function(event) {
//   event.stopPropagation();
//   alert("youve been alerted again!");
// };

// function listenerAlert() {
//   alert("you were clicked with the addEventListener method");
// }

// document.getElementById("mybutton").addEventListener("click", listenerAlert);

console.log(document.querySelector("#mybutton"));
document.querySelector("form").onsubmit = function(event) {
  event.preventDefault();
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  document.querySelector("#user-name").innerHTML = usernameInput.value;
  document.querySelector("#user-password").innerHTML = passwordInput.value;
  usernameInput.value = "";
  passwordInput.value = "";
};

function makeSomething() {
  // first create a new element to be inserted into the document
  const newElement = document.createElement("a");
  //   create text to be inserted into the newly created element
  const text = document.createTextNode("Let Me Google That For You");
  //   attach text to newly created element
  newElement.appendChild(text);
  //   give element attributes
  newElement.setAttribute("href", "https://lmgtfy.com");
  newElement.setAttribute("class", "made-link");
  //   add the new element to the document
  document.body.appendChild(newElement);
}

function removeMadeLink() {
  // select the element that was made by the makeSometing function by the class
  const elementToRemove = document.querySelector(".made-link");
  //   select the parent container to the element
  const parentNode = elementToRemove.parentNode;
  console.log(parentNode);
  //   remove the element from the parent container
  parentNode.removeChild(elementToRemove);
}

document.querySelector(".add-link").onclick = makeSomething;
document.querySelector(".remove-link").onclick = removeMadeLink;
