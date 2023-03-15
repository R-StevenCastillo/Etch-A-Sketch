const gridContainer = document.getElementById("grid-container");

function createGrid(cellNum) {  
    
    for (let i = 0; i < (cellNum * cellNum); i++) {

        let gridCell = document.createElement("div");
        gridCell.setAttribute('id', 'cell');
        gridCell.style.height = "100%";   
        gridCell.style.border = "1px red solid"
        gridContainer.style.gridTemplateColumns = `repeat(${cellNum}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${cellNum}, 1fr)`;
        gridContainer.insertAdjacentElement('beforeend', gridCell)
    };
};




createGrid(3);


