import React, { Component } from "react";
import ProductsList from "./ProductsList.jsx";
import CartTitle from "./CartTitle.jsx";

class ShoppingCart extends Component {
  state = {
    cartItems: [
      { id: 1, name: "iPhone 11", price: 999 },
      { id: 2, name: "iPad Pro", price: 799 },
      { id: 3, name: "MacBook Pro", price: 1299 },
      { id: 4, name: "Apple Watch", price: 399 },
      { id: 5, name: "Apple TV", price: 199 },
      { id: 6, name: "AirPods", price: 249 },
      { id: 7, name: "Mac Studio", price: 1999 },      
    ],
  };

  render() {
    const { cartItems } = this.state;
    const { userData } = this.props;

    return (
      <div className="column">
        <CartTitle 
          userName={userData.firstName} 
          count={cartItems.length} 
        />
        <ProductsList 
          cartItems={cartItems}
        />
      </div>
    );
  }
}

export default ShoppingCart;
