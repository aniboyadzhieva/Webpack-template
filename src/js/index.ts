document.getElementById("newItemButton").addEventListener('click', addNewItem)
let input = document.getElementById("newItem")
let tableBody = document.getElementById("tableBody")
let dropdown = (document.getElementById("dropDown")) as HTMLSelectElement
let id = 0;

function addNewItem(e: MouseEvent) {
    // Value types inside the input
    let inputText = (<HTMLInputElement>input).value;
    let outputText;
    if (dropdown.value == "toUpperCase") {
        outputText = inputText.toUpperCase()
    }
    else {
        outputText = inputText.toLowerCase()
    }

    // Every time increments the value with 1
    id++;
    // Transforms to String because the createTextNode accepts only strings
    let transformedId = id.toString();

    // Creates first row of the body of the table
    let newTableRow = document.createElement('tr')
    let newTableRowId = document.createElement('td')
    let newTableRowItemValue = document.createElement('td')
  
    let idValue = document.createTextNode(transformedId);
    let newText = document.createTextNode(outputText)

    newTableRowId.appendChild(idValue)
    newTableRowItemValue.appendChild(newText);
    
    newTableRow.appendChild(newTableRowId);
    newTableRow.appendChild(newTableRowItemValue);
    tableBody.appendChild(newTableRow);
}


