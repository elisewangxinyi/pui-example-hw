import React, { Component } from 'react';
import "./Item.css";



class Item extends Component {
    render(){
        return(
            <div className="product">
                <div className="thumbnail-pic">
                    <img src={this.props.imageURL} alt={this.props.altText}/>
                </div>

                <h2 className="product-name">{this.props.bunName}</h2>

                <div className="glazing">
                    <label for="glazing-select">Glazing:</label>
                
                    <select name="glazing" className="glazing-select">
                        <option value="original">Keep original</option>
                        <option value="sugar">Sugar milk</option>
                        <option value="vanilla">Vanilla milk</option>
                        <option value="db-choco">Double chocolate</option>
                    </select>
                </div>

                <div className="pack-size">
                    <label>Pack size:</label>
                    <button class="btn-pack-size">1</button>
                    <button class="btn-pack-size">3</button>
                    <button class="btn-pack-size">6</button>
                    <button class="btn-pack-size">12</button>
                </div>

                <div className="add-to-cart">
                    <h2 className="item-price">{this.props.basePrice}</h2>
                    <button className="btn-addCart">Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default Item;