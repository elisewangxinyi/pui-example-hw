/*TODO: 
pop up last 3 secs
*/

const glazingOptions = ["Keep original", "Sugar milk", 
                      "Vanilla milk", "Double Chocolate"];

const glazingToPrice = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double Chocolate": 1.5
}

let cart = [];

class Roll {
    constructor(type, price, glazing, packSize, elementID){
        this.type = type;
        this.basePrice = price;
        this.price = price;
        this.cartPrice = price;
        this.glazing = glazing;
        this.packSize = packSize;
        this.displaySize = packSize;

        this.element = document.querySelector(elementID);

        const glazingSelect = this.element.querySelector('.glazing-select');
        const packSizeSelect = this.element.querySelectorAll('.btn-pack-size');

        this.sizebuttons = packSizeSelect;

        glazingSelect.onchange = this.updateGlazing.bind(this);
        this.populateDropdown(glazingOptions, glazingToPrice, glazingSelect);

        for (const btnSize of this.sizebuttons) {
            btnSize.onclick = this.updateSize.bind(this);
        }

        const btnAddCart = this.element.querySelector('.btn-addCart');
        btnAddCart.onclick = this.addToCart.bind(this);
    }

    populateDropdown(optionList, optionType, container){
        for (let option of optionList){
            //create a new <btn> element
            const elem = document.createElement('option');
        
            // assign btn value and displayname
            elem.setAttribute('value', optionType[option]);
            // elem.setAttribute('name', option);
            elem.innerText = option;
            // append to container
            container.appendChild(elem);
        }
    }
    
    updateSize(event) {
        // Set all buttons to white
        for (const btn of this.sizebuttons){
            btn.style.backgroundColor = 'white';
        }

        const size = event.target.value;
        event.target.style.backgroundColor = 'lightgrey';
        event.target.style.fontWeight = '700';

        this.packSize = parseInt(size);
        this.displaySize = event.target.innerText;
        this.updateTotal();
    }

    updateGlazing(){
        const selectedGlazing = this.element.querySelector('.glazing-select');

        const priceChange = selectedGlazing.value;
        const unitPrice = parseFloat(priceChange) + parseFloat(this.basePrice);
        
        const display = selectedGlazing.options[selectedGlazing.selectedIndex].text;
        

        this.glazing = display;
        this.price = unitPrice;

        this.updateTotal();
    }

    updateTotal(){
        const total = (this.price*this.packSize).toFixed(2);
        this.cartPrice = total;
        const itemPrice = this.element.querySelector(".item-price");
        itemPrice.innerText = '$' + total;
    }

    addToCart(){
        this.popUp();
        
        cart.push(this);
        const totalItem = document.querySelector('#total-item');
        const totalPrice = document.querySelector('#total-price');
        totalItem.innerText = `${cart.length} items`;
        let price = 0;
        for (const item of cart){
            price += Number(item.cartPrice);
        }
        totalPrice.innerText = `Total: $ ${price.toFixed(2)}`;
    }

    popUp() {
        const popup = document.querySelector("#cartPopup");

        const popupName = document.querySelector('#popup-name');
        const popupGlazing = document.querySelector('#popup-glazing');
        const popupSize = document.querySelector('#popup-size');
        const popupPrice = document.querySelector('#popup-price');

        popupName.innerText = this.type;
        popupGlazing.innerText = `${this.glazing} glazing`;
        popupSize.innerText = `Pack of ${this.displaySize}`
        popupPrice.innerText = `Price: $${this.cartPrice}`

        popup.classList.add("edit-mode");

        setTimeout(this.closePopup, 3000);
    }

    closePopup(){
        const popup = document.querySelector("#cartPopup");
        popup.classList.remove("edit-mode");
    }

    
}


const originalBun = new Roll(
    'Original cinnamon roll',
    2.49,
    'Keep original',
    1,
    '#original'
)

const appleBun = new Roll(
    'Apple cinnamon roll',
    3.49,
    'Keep original',
    1,
    '#apple'
)

const raisinBun = new Roll(
    'Raisin cinnamon roll',
    2.99,
    'Keep original',
    1,
    '#raisin'
)

const walnutBun = new Roll(
    'Walnut cinnamon roll',
    3.49,
    'Keep original',
    1,
    '#walnut'
)

const dbChocoBun = new Roll(
    'Double-chocolate cinnamon roll',
    3.99,
    'Keep original',
    1,
    '#db-choco'
)

const strawberryBun = new Roll(
    'Strawberry cinnamon roll',
    3.99,
    'Keep original',
    1,
    '#strawberry'
)


