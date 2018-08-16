import React, { Component } from 'react';
import CartHeader from './components/CartHeader'
import CartItems from './components/CartItems'
import CartFooter from './components/CartFooter'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      cartItemsList: [],
      productsList: []
    }
  }

  componentDidMount = async () => {
    const productsList = await this.getAllProducts()
    const cartItemsList = await this.getAllCartItems()

    this.setState({
      cartItemsList,
      productsList,
    })
  }

  getAllProducts = async () => {
    const response = await axios.get('http://localhost:8082/api/products')
    return response.data
  }

  getAllCartItems = async () => {
    const response = await axios.get('http://localhost:8082/api/items')
    return response.data
  }

  findProduct = async (item) => {
    const products = this.state.productsList.filter(product => product.name === item.name)

    const postProduct = {
      product_id : products[0].id,
      quantity : item.quantity
    }

    const response = await axios.post('http://localhost:8082/api/items', postProduct)

    this.setState({ cartItemsList: [ ...this.state.cartItemsList, response.data ]})

  }


  render() {
    return (
      <div>
        <CartHeader />
        <CartItems findProduct={ this.findProduct } cartItemsList={ this.state.cartItemsList } productsList={ this.state.productsList }/>
        <CartFooter copyright="2016"/>
      </div>
    );
  }
}

export default App;
