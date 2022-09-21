//TODO: pop up

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
        for (let displayName of optionList){
            //create a new <btn> element
            const elem = document.createElement('option');
        
            // assign btn value and displayname
            elem.setAttribute('value', optionType[displayName]);
            elem.innerText = displayName;
    
            // append to container
            container.appendChild(elem);
        }
    }
    
    updateSize(event) {
        for (const btn of this.sizebuttons){
            btn.style.backgroundColor = 'white';
        }

        const size = event.target.value;
        event.target.style.backgroundColor = 'lightgrey';
        event.target.style.fontWeight = '700';
        this.packSize = parseInt(size);
        this.updateTotal();
    }

    updateGlazing(){
        const priceChange = this.element.querySelector('.glazing-select').value;
        const unitPrice = parseFloat(priceChange) + parseFloat(this.basePrice);
        
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
        cart.push(this);
        const totalItem = document.querySelector('#total-item');
        const totalPrice = document.querySelector('#total-price');
        totalItem.innerText = `${cart.length} items`;
        let price = 0;
        for (const item of cart){
            price += Number(item.cartPrice);
        }
        totalPrice.innerText = `Total: $ ${price}`;
    }

    
}


const originalBun = new Roll(
    'original',
    2.49,
    'Keep original',
    1,
    '#original'
)

const appleBun = new Roll(
    'apple cinnamon',
    3.49,
    'Keep original',
    1,
    '#apple'
)

const raisinBun = new Roll(
    'raisin',
    2.99,
    'Keep original',
    1,
    '#raisin'
)

const walnutBun = new Roll(
    'walnut',
    3.49,
    'Keep original',
    1,
    '#walnut'
)

const dbChocoBun = new Roll(
    'double chocolate',
    3.99,
    'Keep original',
    1,
    '#db-choco'
)

const strawberryBun = new Roll(
    'strawberry',
    3.99,
    'Keep original',
    1,
    '#strawberry'
)



