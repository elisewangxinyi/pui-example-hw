/*********************Set up objects********************/ 
const glazing = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double Chocolate": 1.5
}

const packSize = {
    1: 1,
    3: 3,
    6: 5,
    12: 10
}

/*********************Set up option lists********************/ 
let glazingOptions = ["Keep original", "Sugar milk", 
                      "Vanilla milk", "Double Chocolate"];

let packSizeOptions = [1, 3, 6, 12];


/*********************Set up option lists********************/ 

// populate dropdown menu
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

// update price upon glazing chnage
function glazingChange(element){
    const priceChange = element.value;
    const unitPrice = parseFloat(priceChange) + 2.49;
    const count = document.querySelector("#size-select");
    updateTotal(unitPrice, parseInt(count.value));
}

// update price upon pack size change
function sizeChange(element){
    const count = parseInt(element.value);
    const priceChange = document.querySelector("#glazing-select").value;
    const unitPrice = parseFloat(priceChange) + 2.49;
    updateTotal(unitPrice, count);
}

// calculate and update price field
function updateTotal(unitPrice, count){
    const total = (unitPrice*count).toFixed(2);
    console.log(total);
    const itemPrice = document.querySelector(".item-price");
    itemPrice.innerText = '$' + total;
}

const glazingSelect = document.querySelector('#glazing-select');
const sizeSelect = document.querySelector('#size-select');
populateDropdown(glazingOptions, glazing, glazingSelect);
populateDropdown(packSizeOptions, packSize, sizeSelect);




