import React, { Component } from 'react';
import { CartContext } from './CartContext';
import { MdOutlineShoppingCart } from 'react-icons/md';

export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem',
          backgroundColor: 'white',
          position: 'fixed',
          width: '100%',
        }}>
        <h1>WMAD Store</h1>
        <div style={{ display: 'flex', justifyContent: 'end', gap: '1rem' }}>
          <h2>
            <MdOutlineShoppingCart />
            <span>Cart</span>
          </h2>
<<<<<<< HEAD
          <h2>{this.context.state.cart.length}</h2>
=======
          <h2>{this.context.cartList.length}</h2>
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
        </div>
      </div>
    );
  }
}
Navbar.contextType = CartContext;
