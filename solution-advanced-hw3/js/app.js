//TODO: Populate the button
// assign ids to each bun?
// setTimeout for pop up

function Roll(type, price, glazing, packSize) {
    this.type = type;
    this.baseprice = price;
    this.glazing = glazing;
    this.packSize = packSize;
}


const glazing = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double Chocolate": 1.5
}

function populateDropdown(optionList, optionType, container){
    for (let displayName of optionList){
        //create a new <option> element
        const elem = document.createElement('option');
    
        // assign option value and displayname
        elem.setAttribute('value', optionType[displayName]);
        elem.innerText = displayName;

        // append to container
        container.appendChild(elem);
    }
}

const glazingOptions = ["Keep original", "Sugar milk", 
                      "Vanilla milk", "Double Chocolate"];

const glazingSelectAll = document.querySelectorAll('.glazing-select');
for (const glazingSelect of glazingSelectAll) {
    populateDropdown(glazingOptions, glazing, glazingSelect);
}
