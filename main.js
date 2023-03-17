const gridContainer = document.getElementById("grid-container");
const resetBtn = document.getElementById('reset-button');
const closeBtn = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const input = document.getElementById('cells');

//Hover function (HERE CAN YOU ADD THE MULTICOLOR OPTION IF YOU WANT)
function mouseOver(hovering) {
    hovering.target.style.backgroundColor = 'black';
}

//Grid creation function
function createGrid(cellNum) {  
    
    for (let i = 0; i < (cellNum * cellNum); i++) {

        //Grid cell creation with multiple css attributes
        let gridCell = document.createElement("div");
        gridCell.setAttribute('class', 'cell');
        gridCell.style.height = "100%";
        gridCell.style.backgroundColor = 'white';
        //funtion call for the div's hovering behavior
        gridCell.addEventListener('mouseover', mouseOver);
        //This help us make the grid rows and columns, this was used before in example with pictures
        gridContainer.style.gridTemplateColumns = `repeat(${cellNum}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${cellNum}, 1fr)`;
        //I Found this insert method on mdn web docs because the normal method was not working at the start
        gridContainer.insertAdjacentElement('beforeend', gridCell);
    };
};

//The reset button event listener, this opens the modal and deletes the old grid
resetBtn.addEventListener("click", () => {
    modal.classList.add("open");
    removeAllChildNodes(gridContainer);
});

//The close modal event listener, it works with a function because validation is needed
closeBtn.addEventListener("click", validateInput);

/*This function was harder than it looks, because first I just clean the grid using
"hovering.target.style.backgroundColor = 'white';"
but the problem is that it create hundreds of unused divs, so I tried to find something
that deletes the grid to create new ones. This function grab the parent div
and delete all the children inside them. I found this solution on stackoverflow*/
function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*For some reason the number type is a little broken in javascript and I don't like
how this looks on the page, this is the reason why i use input type text,
this is the validation to enter only numbers, first in the html file its this validation
onkeypress="if (isNaN(String.fromCharCode(event.keyCode)))
This is the second. => input.addEventListener('paste', e => e.preventDefault());
The first one helps us now if the character is a number
The second stop pasting characters, because you can still pass letter with copypasting
Probably still has some issues that I need to revisit in the future.*/
input.addEventListener('paste', e => e.preventDefault());

//This function validates if the input is empty. 
//If the input has data them close the modal, clear the input and create the new grid.
function validateInput() {
    let cellsValue = input.value;
    if (cellsValue == "" || cellsValue == null) {
        alert("Write a number!"); 
        return false;
    } else {
        modal.classList.remove("open");
        input.value = "";
        createGrid(cellsValue);
        return true;
    }
}

//This create the initial grid
createGrid(16);