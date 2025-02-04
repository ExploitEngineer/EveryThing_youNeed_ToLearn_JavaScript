<<<<<<< HEAD
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
=======
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
>>>>>>> 0069fe80899d50dacef945e4c2b3b0830a0f14c1
