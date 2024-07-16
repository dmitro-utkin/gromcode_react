import React, { Component } from "react";

class ProductsList extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.cartItems !== this.props.cartItems;
  }

  render() {
    const { cartItems } = this.props;
    const total = cartItems.reduce((acc, { price }) => acc + price, 0);

    return (
      <div className="products">
        <ul className="products__list">
          {cartItems.map(({ id, name, price }) => (
            <li key={id} className="products__list-item">
              <span className="products__item-name">{name}</span>
              <span className="products__item-price">{price}</span>
            </li>
          ))}
        </ul>
        <div className="products__total">{`Total: ${total}`}</div>
      </div>
    );
  }
}

export default ProductsList;
