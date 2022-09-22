import React, { Component } from 'react';
import './Homepage.css';
import Item from './Item';
import Navbar from './Navbar';


class Homepage extends Component {
    render(){
        return (
            <div className="Homepage">
                <header>
                    <div id='header-logo'>
                        <img src="assets/logo-01.svg" alt="Logo of Bun Bun Bake Shop"/>
                    </div>
                    
                    <div id="header-content">
                        <Navbar />
                        <hr className="divider"/>
                        <h1>Our hand-made cinnamon rolls</h1>
                    </div>
                </header>

                <div id='product-list'>
                    <Item
                        imageURL = "assets/original-cinnamon-roll.jpg"
                        bunName = "Original cinnamon roll"
                        altText = "original cinnamon roll on a plate"
                        basePrice = "$2.49"/>
                    <Item
                        imageURL = "assets/apple-cinnamon-roll.jpg"
                        bunName = "Apple cinnamon roll"
                        altText = "apple cinnamon roll with a fork"
                        basePrice = "$3.49"/>
                    <Item
                        imageURL = "assets/raisin-cinnamon-roll.jpg"
                        bunName = "Raisin cinnamon roll"
                        altText = "raisin cinnamon roll"
                        basePrice = "$2.99"/>
                    <Item
                        imageURL = "assets/walnut-cinnamon-roll.jpg"
                        bunName = "Walnut cinnamon roll"
                        altText = "walnut cinnamon roll with a fork"
                        basePrice = "$3.49"/>
                    <Item
                        imageURL = "assets/double-chocolate-cinnamon-roll.jpg"
                        bunName = "Double-chocolate cinnamon roll"
                        altText = "a double chocolate cinnamon roll in a wrapper"
                        basePrice = "$3.99"/>
                    <Item
                        imageURL = "assets/strawberry-cinnamon-roll.jpg"
                        bunName = "Strawberry cinnamon roll"
                        altText = "multiple strawberry cinnamon rolls"
                        basePrice = "$3.99"/>
                </div>
            </div>
        );
    }
}

export default Homepage;