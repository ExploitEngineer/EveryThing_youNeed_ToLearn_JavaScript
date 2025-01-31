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
})
