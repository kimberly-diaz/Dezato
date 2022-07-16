// This script changes the type from savory to sweet and vice-versa
function changeToSavory() {
    var x = document.getElementById("type"); // gets the element by id called 'type' and stores it in x
    
    if (x.className == "type-sweet") { // checks if x's class name is 'type-sweet'
        x.className = 'type-savory'; //if so, then changes it to 'type-savory'
    }
}
function changeToSweet() {
    var x = document.getElementById("type"); // gets the element by id called 'type' and stores it in x
    
    if (x.className == "type-savory") { // checks if x's class name is 'type-savory'
        x.className = "type-sweet"; //if so, then changes it to 'type-sweet'
    }
}