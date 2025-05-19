// What is an Event Listener ?
// An event listener is a function that waits for a specific event to happen on a specific element, like a user click, hover, keydown, etc.

element.addEventListener("event", handlerFunction);

document.querySelector("button").addEventListener("click", function () {
  alert("Button Clicked!");
});

// Mouse Evenets
/*
click	Single click on an element
dblclick	Double click on an element
mousedown	Mouse button is pressed
mouseup	Mouse button is released
mousemove	Mouse is moved over an element
mouseover	Mouse enters the element
mouseout	Mouse leaves the element
mouseenter	Like mouseover, but doesn't bubble
mouseleave	Like mouseout, but doesn't bubble
contextmenu	Right-click triggered
*/

document.addEventListener("mousemove", function (e) {
  console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
});

// Keyboard Events
/*
keydown	Any key is pressed down
keyup	Key is released
keypress	(deprecated) when a character key is pressed
*/

document.addEventListener("keydown", function (e) {
  console.log(`Key pressed: ${e.key}, Code: ${e.code}`);
});
