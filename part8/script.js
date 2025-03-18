// INFO: Example 1
document.getElementById("changeTextButton").addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is changed";
});


// INFO: Example 2
document.getElementById("highlightFirstCity").addEventListener('click', function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});


// INFO: Example 3
document.getElementById("changeOrder").addEventListener('click', function () {
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.background = "brown";
    coffeeType.style.padding = '15px';
    coffeeType.style.borderRadius = '8px';
});


// INFO: Example 4
document.getElementById("addNewItem").addEventListener('click', function () {

    let newItem = document.createElement('li');
    newItem.textContent = "Eggs";
    document.getElementById("shoppingList").appendChild(newItem);
});


// INFO: Example 5
document.getElementById("removeLastTask").addEventListener('click', function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
});


// INFO: Example 6
document.getElementById("clickMeButton").addEventListener('click', function () {
    alert("chaicode");
});

// INFO: Example 1
document.getElementById("changeTextButton").addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is changed";
});


// INFO: Example 2
document.getElementById("highlightFirstCity").addEventListener('click', function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});


// INFO: Example 3
document.getElementById("changeOrder").addEventListener('click', function () {
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.background = "brown";
    coffeeType.style.padding = '15px';
    coffeeType.style.borderRadius = '8px';
});


// INFO: Example 4
document.getElementById("addNewItem").addEventListener('click', function () {

    let newItem = document.createElement('li');
    newItem.textContent = "Eggs";
    document.getElementById("shoppingList").appendChild(newItem);
});


// INFO: Example 5
document.getElementById("removeLastTask").addEventListener('click', function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
});


// INFO: Example 6
document.getElementById("clickMeButton").addEventListener('click', function () {
    alert("chaicode");
});


// INFO: Example 7
document.getElementById("teaList").addEventListener('click', function (event) {
    if (event.target && event.target.matches('.teaItem')) {
        alert("You selected:" + event.target.textContent);
    }
});


// INFO: Example 8
document.getElementById("feedbackFrom").addEventListener('submit', function (e) {
    e.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;
});


// INFO: Example 9
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('domStatus').textContent = "DOM fully loaded";
});


// INFO: Example 10
document.getElementById("toggleHighLight").addEventListener('click', function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle('highlight');
});

/*
✅ What is the DOM?
The DOM (Document Object Model) is a tree-like structure representing the HTML document as objects and nodes. JavaScript interacts with the DOM to manipulate web pages dynamically.

📌 Selecting Elements (Getting Elements from the DOM)
1. getElementById()
Returns a single element with the given id.

Example:

javascript
Copy
Edit
const header = document.getElementById('header');
console.log(header);
2. getElementsByClassName()
Returns a live HTMLCollection (array-like) of all elements with the given class name.

Example:

javascript
Copy
Edit
const items = document.getElementsByClassName('item');
console.log(items);
3. getElementsByTagName()
Returns a live HTMLCollection of all elements with the given tag name.

Example:

javascript
Copy
Edit
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
4. querySelector()
Returns the first matching element of the specified CSS selector.

Example:

javascript
Copy
Edit
const header = document.querySelector('.header');
console.log(header);
5. querySelectorAll()
Returns a static NodeList (not live) of all matching elements.

Example:

javascript
Copy
Edit
const items = document.querySelectorAll('.item');
console.log(items);
📌 Creating & Inserting Elements
1. createElement()
Creates an HTML element but doesn't add it to the document yet.

Example:

javascript
Copy
Edit
const newDiv = document.createElement('div');
newDiv.textContent = 'I am a new Div!';
2. appendChild()
Adds a node as the last child of a parent node.

Example:

javascript
Copy
Edit
const parent = document.getElementById('container');
parent.appendChild(newDiv);
3. append() (Newer & Better)
Adds multiple elements or text nodes.

Can add DOM strings (like text) directly.

Example:

javascript
Copy
Edit
parent.append('Hello World', newDiv);
4. innerHTML
Sets or gets the HTML content of an element.

Example:

javascript
Copy
Edit
const div = document.getElementById('container');
div.innerHTML = '<p>This is a paragraph</p>';
5. textContent
Sets or gets only text content (no HTML tags).

Example:

javascript
Copy
Edit
const div = document.getElementById('container');
div.textContent = 'Just some text';
📌 Removing & Replacing Elements
1. removeChild()
Removes a child element from its parent.

Example:

javascript
Copy
Edit
parent.removeChild(newDiv);
2. remove() (Newer & Simpler)
Directly removes the element itself.

Example:

javascript
Copy
Edit
newDiv.remove();
3. replaceChild()
Replaces a child element with another.

Example:

javascript
Copy
Edit
const newPara = document.createElement('p');
newPara.textContent = 'This is a new paragraph.';
parent.replaceChild(newPara, oldChild);
📌 Event Listeners & Handling Events
1. addEventListener()
Adds an event listener to an element without overwriting existing listeners.

Example:

javascript
Copy
Edit
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    alert('Button Clicked!');
});
2. Inline Event Handling (Not Recommended)
Using onclick in HTML is outdated.

Example:

html
Copy
Edit
<button onclick="alert('Clicked!')">Click Me</button>
📌 Event Types & Event Object
1. Common Event Types:
click - When an element is clicked.

mouseover - When the mouse is over an element.

mouseout - When the mouse leaves an element.

submit - When a form is submitted.

keydown - When a keyboard key is pressed.

load - When a page or an image is fully loaded.

2. Event Object (event)
Provides extra information about the event.

Example:

javascript
Copy
Edit
btn.addEventListener('click', (event) => {
    console.log(event.target);  // Logs the element that was clicked
});
📌 Modifying Attributes & Styling
1. setAttribute() & getAttribute()
Example:

javascript
Copy
Edit
const img = document.querySelector('img');
img.setAttribute('src', 'new-image.jpg');
console.log(img.getAttribute('src'));
2. style Property
Modify CSS directly from JavaScript.

Example:

javascript
Copy
Edit
const div = document.getElementById('box');
div.style.backgroundColor = 'red';
🔥 Best Practices & Important Points
Use append() over appendChild() when you need to add text nodes or multiple nodes at once.

Use remove() instead of removeChild() for simpler removal.

Avoid using innerHTML if possible — it can be unsafe if not handled properly (XSS attacks).

Use addEventListener() instead of inline event handling for better control and maintenance.

Use textContent over innerHTML if you only need to manipulate text.

*/
