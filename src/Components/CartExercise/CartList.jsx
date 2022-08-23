<<<<<<< HEAD
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
export default function CartList() {
  const { cartList, calculateTotal } = useContext(CartContext);
  const parseCartList = cartList.map((item) => <CartItem item={item} />);
=======
import React from 'react';
import { useContext } from 'react';
import { RESET_CART } from './actions';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

export default function CartList() {
  const { state, calculateTotal, dispatch } = useContext(CartContext);
  const parseCartList = state.cart.map((item, index) => (
    <CartItem item={item} key={index} />
  ));
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
  return (
    <div className='component'>
      <h1>Cart list</h1>
      <ul>{parseCartList}</ul>
      Total: ${calculateTotal()}
<<<<<<< HEAD
=======
      <button onClick={() => dispatch({ type: RESET_CART })}>Reset Cart</button>
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
    </div>
  );
}
