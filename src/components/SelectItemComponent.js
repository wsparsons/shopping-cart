import React from 'react'

const SelectItemComponent = ({ product }) => {
  return (
    <option
      id={ product.id }
      name="product"
      price={ product.priceInCents }
      >{ product.name }</option>
  )
}

export default SelectItemComponent
