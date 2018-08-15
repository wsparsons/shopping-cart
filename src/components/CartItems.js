import React, { Component } from 'react'
import CartItemComponent from './CartItemComponent'
import AddItem from './AddItem'

const products = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
]

class CartItems extends Component {
  constructor (props){
    super(props)
  }

  getProduct = (item) => {
    const findProduct = products.filter(product => product.name === item.name)

    const addProduct = {
      newProduct : findProduct[0],
      newQuantity : parseInt(item.quantity)
    }

    this.props.updateCartItem(addProduct)
  }

  render () {
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          { this.props.cartItemsList.map(item => <CartItemComponent key={item.id} item={ item }/> )}
        </div>
        <AddItem getProduct={ this.getProduct} products={ products }/>
      </div>
    )
  }
}
export default CartItems
