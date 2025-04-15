//  🔍 Selecting Elements
document.getElementById("myId");
document.querySelector(".myClass");
document.querySelectorAll("div"); // returns NodeList


// ✍️ Changing Content
element.innerText = "Hello"; // changes text
element.innerHTML = "<strong>Hello</strong>"; // sets inner HTML
inputElement.value = "New value"; // sets value for input


// 🧱 Changing Attributes / Classes
element.setAttribute("src", "new.jpg");
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("dark-mode");


// 🏗️ Create/Append/Remove Elements
const newDiv = document.createElement("div");
newDiv.innerText = "New Div";
document.body.appendChild(newDiv);
// Remove
element.remove();


// 🎯 Event Listeners
button.addEventListener("click", () => {
    alert("Button clicked!");
});


// 🧭 DOM Traversal
el.parentNode
el.children
el.firstChild
el.nextElementSibling


// ⚡ DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    // Safe to use DOM here
});
