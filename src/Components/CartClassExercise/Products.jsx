<<<<<<< HEAD
import axios from 'axios';
import React, { Component } from 'react';
=======
import React, { Component } from 'react';
import axios from 'axios';
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
import Product from './Product';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
<<<<<<< HEAD
=======
      anotherProp: 'prop',
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
    };
  }
  componentDidMount() {
    axios
<<<<<<< HEAD
      .get('https://fakestoreapi.com/products')
      .then((response) => this.setState({ products: [...response.data] }));
  }
  render() {
    const parseProductList = this.state.products.map((product) => (
=======
      .get('https://fakestoreapi.com/products/')
      .then((response) => this.setState({ products: response.data }));
  }
  render() {
    const parseProducts = this.state.products.map((product) => (
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
      <Product product={product} key={product.id} />
    ));
    return (
      <div>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '1rem',
          }}>
<<<<<<< HEAD
          {parseProductList}
=======
          {parseProducts}
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
        </section>
      </div>
    );
  }
}
