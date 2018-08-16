import React from 'react'
import CartItemComponent from './CartItemComponent'
import AddItem from './AddItem'

const CartItems = ({ cartItemsList, findProduct, productsList }) => {

  const price = cartItemsList.reduce((total, item) => {
    const findProduct = productsList.find(product => product.id === item.product_id)
    return total + ((findProduct.priceInCents * item.quantity) / 100)
  }, 0)

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
        { cartItemsList.map(item => <CartItemComponent key={item.id} item={ item } productsList={ productsList }/> )}
      </div>
      <p>Total Price: ${ price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }</p>
      <AddItem findProduct={ findProduct } productsList={ productsList }/>
    </div>
  )
}

export default CartItems
