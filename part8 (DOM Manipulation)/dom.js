/*
1. What is DOM?
Tree structure of the HTML page
JavaScript can read/manipulate it
Starts with window -> document -> html -> head/body -> elements
*/

// 2. Window Object (Global Scope)
window.alert("Hi!");
window.location.href; // Current URL
window.innerWidth; // Width of viewport
window.setTimeout(fn, 1000); // Call function later
console.log(window.document); // Whole DOM

// 3. Document Object
document.title = "New Page";
console.log(document.body);
document.body.style.background = "lightblue";
document.URL;
document.querySelector("h1").innerText;

// 4. Selecting Elements (5 Key Methods)
document.getElementById("myId");
document.getElementsByClassName("card");
document.getElementsByTagName("section");
document.querySelector(".hero");
document.querySelectorAll("ul li");

// 5. Styling Elements
el.style.backgroundColor = "black";
el.style.color = "white";
el.style.fontSize = "24px";
el.style.padding = "10px";
el.style.border = "1px solid #ccc";

// 6. Content Change (Text, HTML)
el.innerText = "New text";
el.textContent = "Hello World";
el.innerHTML = "<strong>Bold</strong>";

// 7. Attributes (Set/Get/Remove/Has)
el.setAttribute("href", "https://google.com");
let val = el.getAttribute("class");
el.removeAttribute("disabled");
let has = el.hasAttribute("title");
el.setAttribute("data-user", "john123");

// 8. ClassList (CSS Classes)
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("open");
el.classList.contains("selected"); // true/false
el.classList.replace("old", "new");

// 9. Events (Click, Hover, Input, Submit, etc.)
el.addEventListener("click", () => alert("Clicked!"));
el.addEventListener("mouseover", () => console.log("Hovered!"));
input.addEventListener("input", (e) => console.log(e.target.value));
form.addEventListener("submit", (e) => e.preventDefault());
window.addEventListener("scroll", () => console.log("scrolling"));

// 10. Creating & Appending Elements
let p = document.createElement("p");
p.innerText = "New paragraph";
document.body.appendChild(p);
let btn = document.createElement("button");
btn.setAttribute("class", "btn");
btn.textContent = "Click Me";
document.querySelector("#container").appendChild(btn);

// 11. Removing Elements
el.remove();
parent.removeChild(child);
container.innerHTML = ""; // clear all

// 12. NodeList vs HTMLCollection
let nodeList = document.querySelectorAll("li");
nodeList.forEach((el) => console.log(el));
let htmlCollection = document.getElementsByClassName("box");
Array.from(htmlCollection).forEach((el) => console.log(el));

// 13. Forms & Input Fields
let input = document.querySelector("#name");
input.value = "John"; // Set value
input.getAttribute("placeholder");
input.setAttribute("placeholder", "Enter name");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});

// 14. Traversing DOM (Parent, Children, Siblings)
el.parentElement;
el.children; // HTMLCollection
el.firstElementChild;
el.lastElementChild;
el.nextElementSibling;
el.previousElementSibling;

// 15. Cloning Elements
let copy = el.cloneNode(true); // true = deep clone
document.body.appendChild(copy);

// 16. Modifying Classes Based on Condition
if (!el.classList.contains("active")) {
  el.classList.add("active");
} else {
  el.classList.remove("active");
}
// 17. Setting Styles Dynamically
function toggleTheme() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}
/*
18. Useful Real-world Examples
Toggle mobile menu
Validate form input
Show/hide password
Change theme (dark/light)
Load content dynamically with .innerHTML
*/
