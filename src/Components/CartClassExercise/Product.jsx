import React, { Component } from 'react';
import { CartContext } from './CartContext';
<<<<<<< HEAD
import ButtonCart from './ButtonCart';
import styled from 'styled-components';
const Card = styled.div`
  display: grid;
  align-items: center;
=======
import styled from 'styled-components';
import Button from './Button';

const Card = styled.div`
  display: grid;
  align-items: center;

>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  width: 450px;
  background-color: hsl(0, 0%, 100%);
  gap: 1rem;
  padding: 1rem;
  p {
    color: gray;
  }
<<<<<<< HEAD
  h1 {
    color: hsl(158, 36%, 27%);
  }
=======

  h1 {
    color: hsl(158, 36%, 27%);
  }

>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
  .card--content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default class Product extends Component {
  render() {
<<<<<<< HEAD
    const product = this.props.product;
=======
    const { product } = this.props;
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
    return (
      <Card>
        <img
          src={product.image}
          alt=''
          style={{ width: '90%', height: '300px' }}
        />
        <div className='card--content'>
          <p>{product.category.toUpperCase()}</p>
          <h1>{product.title}</h1>
          <p>{product.description.substring(0, 100)}</p>
          <h1>${product.price.toFixed(2)}</h1>
<<<<<<< HEAD
          <ButtonCart
            label='Add to cart'
            type='add'
            onClick={() =>
              this.context.dispatch({ type: 'ADD_TO_CART', payload: product })
            }
=======
          <Button
            label='Add to cart'
            type='add'
            onClick={() => this.context.addToCart(product)}
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
          />
        </div>
      </Card>
    );
  }
}
Product.contextType = CartContext;
