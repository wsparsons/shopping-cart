import React from 'react'

const CartItemComponent = ({ item, productsList }) => {
  const findProductInfo = productsList.find(product => {
    return product.id === item.product_id ? product : null
  })

  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">{ findProductInfo.name }</div>
        <div className="col-md-2">${ (findProductInfo.priceInCents /100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }</div>
        <div className="col-md-2">{ item.quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</div>
      </div>
    </div>
  )
}

export default CartItemComponent
