/*
# DOM (Document Object Model) in JavaScript - Full In-Depth Explanation

---

## What is the DOM?

The Document Object Model (DOM) is a **programming interface** provided by the browser that represents the structure of a webpage. It converts the HTML document into a **tree of JavaScript objects** so you can manipulate content, structure, and style dynamically.

The DOM represents:

* Each **HTML element** as a **node object**.
* The whole document as a `document` object.

---

## DOM Tree Structure

* **Document**: The root node of the document.
* **Element**: Each tag becomes an element node.
* **Text**: Inside each tag, text is also a node.
* **Attributes**: HTML attributes (e.g., class, id) are part of element nodes.

It creates a **tree-like structure** of nested elements.

---

## Element Selection Methods

### 1. `getElementById()` - Selects by unique ID.

### 2. `getElementsByClassName()` - Selects by class name (returns a live HTMLCollection).

### 3. `getElementsByTagName()` - Selects by tag name (live HTMLCollection).

### 4. `querySelector()` - Selects the first matching CSS selector.

### 5. `querySelectorAll()` - Selects all matching CSS selectors (NodeList).

---

## Reading and Changing Content

### `textContent`

* Returns the text content of an element and all its children.
* Ignores CSS styles (hidden or shown).
* Best for reading/writing raw text.

### `innerText`

* Similar to `textContent` but respects CSS styling.
* Only shows visible text.
* Can trigger reflow and repaint (performance impact).

### `innerHTML`

* Returns the HTML content as a string.
* Can be used to insert HTML markup (risky for XSS).

### `outerHTML`

* Returns the HTML of the element **including the element itself**.
* Can replace the entire element.

### `nodeValue`

* Works on text nodes, not commonly used directly on elements.

---

## Attributes in DOM

### Accessing Attributes

* `getAttribute('attributeName')` – Reads attribute value.
* `setAttribute('attributeName', value)` – Sets attribute.
* `removeAttribute('attributeName')` – Removes attribute.
* `hasAttribute('attributeName')` – Checks if attribute exists.

### Standard Attributes

* `id`, `class`, `href`, `src`, `alt`, `type`, `value`, etc.

### Custom Data Attributes (data-\*)

* Accessible using the `dataset` property.
* `element.dataset.key`

---

## Working with Classes

### `className`

* Directly gets/sets the `class` attribute as a string.

### `classList`

* Provides methods to work with classes:

  * `add()`
  * `remove()`
  * `toggle()`
  * `contains()`
  * `replace()`

---

## Styling Elements

### `element.style`

* Inline styles only.
* Access and change individual CSS properties.

### Best Practice

* Prefer `classList` manipulation to apply CSS classes for multiple style changes.

---

## DOM Traversal (Navigating the DOM)

### Parent/Child

* `parentNode`
* `childNodes` (includes text nodes)
* `children` (only elements)
* `firstChild`, `lastChild`
* `firstElementChild`, `lastElementChild`

### Siblings

* `nextSibling`, `previousSibling` (includes text nodes)
* `nextElementSibling`, `previousElementSibling`

---

## Creating and Modifying Elements

### Creating Elements

* `document.createElement('tagName')`
* `document.createTextNode('text')`

### Appending Elements

* `parent.appendChild(child)`
* `parent.insertBefore(newEl, referenceEl)`
* `parent.append()` / `prepend()`

### Removing/Replacing Elements

* `element.remove()`
* `parent.removeChild(child)`
* `parent.replaceChild(newChild, oldChild)`

---

## DOM Events (Brief Overview)

* `addEventListener('eventType', callback)`
* Mouse Events: `click`, `dblclick`, `mouseover`, `mouseout`, `mouseenter`, `mouseleave`
* Keyboard Events: `keydown`, `keyup`, `keypress`
* Form Events: `submit`, `change`, `input`, `focus`, `blur`

---

## DOMContentLoaded vs window\.onload

* `DOMContentLoaded`: Triggers when the DOM is fully parsed (recommended).
* `window.onload`: Triggers after all content, including images, is fully loaded.

---

## Additional Advanced Concepts

### `documentFragment`

* A lightweight container to batch DOM changes for performance.

### `cloneNode()`

* Clones a DOM node. Use `cloneNode(true)` for deep clone.

### `isEqualNode()` / `isSameNode()`

* Compare two nodes for structural and value equality.

### Shadow DOM

* Encapsulation method for components (used in Web Components).

---

Let me know if you'd like detailed examples of any of these or want to dive into event delegation, mutation observers, or Shadow DOM next.
*/
