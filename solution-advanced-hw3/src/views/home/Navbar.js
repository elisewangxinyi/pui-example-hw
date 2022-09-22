import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="navigation">
                    <a href="gallery.html">PRODUCTS</a>
                </div>
            
                <div className="navigation">
                    <a href="cart.html">CART</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;