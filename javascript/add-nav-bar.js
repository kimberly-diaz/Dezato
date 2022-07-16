// adds the nav bar styling
function addNavBar() {
    var x = document.getElementById("nav"); // gets the element by id called 'nav' and stores it in x
    
    if (x.className == "nav-bar") { //checks if x's class name is 'nav-bar'
        x.className += " res"; // if so, adds a new class called 'res'
    }
    else {
        x.className = "nav-bar"; // if not, puts it back to 'nav-bar'
    }
}