import React, { Component } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
import { MdOutlineExpandMore } from 'react-icons/md';

export default class CartList extends Component {
  constructor() {
    super();
    this.state = {
      toggleCart: true,
      cartList: [],
    };
  }
<<<<<<< HEAD
  render() {
    const parseCartList = this.context.state.cart.map((item) => (
=======

  render() {
    const parseCartList = this.context.cartList.map((item) => (
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
      <CartItem item={item} key={item.id} />
    ));
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 'fit-content',
          }}>
          <h1>Cart list</h1>
          <div
            style={{
              backgroundColor: 'white',
              padding: '.5rem',
              borderRadius: '5px',
            }}
            onClick={() =>
              this.setState({ toggleCart: !this.state.toggleCart })
            }>
            <MdOutlineExpandMore />
          </div>
        </div>
        {this.state.toggleCart && (
          <div>
            <ul
              style={{
                display: 'grid',
                gap: '1rem',
                padding: '2rem 1rem',
              }}>
<<<<<<< HEAD
              {this.context.state.cart.length > 0 ? (
=======
              {this.context.cartList.length > 0 ? (
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
                parseCartList
              ) : (
                <h2>No items in the cart yet.</h2>
              )}
            </ul>
            <h2>Total: ${this.context.calculateTotal().toFixed(2)}</h2>
<<<<<<< HEAD
            <button
              onClick={() => this.context.dispatch({ type: 'RESET_CART' })}>
              Reset cart
            </button>
=======
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
          </div>
        )}
      </div>
    );
  }
}
CartList.contextType = CartContext;
