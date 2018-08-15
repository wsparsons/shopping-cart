import React, { Component } from 'react';
import CartHeader from './components/CartHeader'
import CartItems from './components/CartItems'
import AddItem from './components/AddItem'
import CartFooter from './components/CartFooter'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      cartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
    }
  }

  updateCartItem = (product) => {
    const newItem = {
      id: (this.state.cartItemsList.length + 1 ),
      product: product.newProduct,
      quantity: product.newQuantity
    }
    this.setState({ cartItemsList: [ ...this.state.cartItemsList, newItem ]})
  }

  render() {
    return (
      <div>
        <CartHeader />
        <CartItems updateCartItem={ this.updateCartItem } cartItemsList={ this.state.cartItemsList }/>
        <CartFooter copyright="2016"/>
      </div>
    );
  }
}

export default App;
