"use strict"


/* This changes the class name of the li the user clicked to "selected" */
function changeClassName(id) {
    unselect();
    document.getElementById(id).className = "selected";
}

/* This sets all #rating1-5 to have a class of "unselected" */
function unselect() {
    for(let i = 1; i < 6; i++) {
        document.getElementById("rating" + i).className = "unselected";
    }
}





function buttonClick() {
    /* if no number is selected, don't do anything */
    if(document.getElementsByClassName("selected").length != 1) {
        return;
    }

    swapScreen();

    updateSpanElement();
}

function swapScreen() {
    document.getElementsByClassName("survey-screen")[0].style.display = "none";
    document.getElementsByClassName("thank-you-screen")[0].style.display = "flex";
}

function updateSpanElement() {
    let score = document.getElementsByClassName("selected")[0].innerHTML;
    
    document.getElementById("span").innerHTML = `You selected ${score} out of 5`;
}