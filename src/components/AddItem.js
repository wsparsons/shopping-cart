import React, { Component } from 'react'
import SelectItemComponent from './SelectItemComponent'

class AddItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      product: {
        id: '',
        name: '',
        priceInCents: ''
      },
      quantity: 0,
    }
  }

  onChange = (event) => {
    console.log(event.target);
    this.setState({
      product: {
        id: event.target.id,
        name: event.target.name,
        priceInCents: event.target.price
      },
      quantity: event.target.quantity,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

  }

  render () {

    const products = this.props.products.map(product => <SelectItemComponent key={ product.id } product={ product }/>)

    return (
      <div className="container">
        <form onSubmit={ this.onSubmit }>
          <div className="form-group">
            <label>Quantity</label>
            <input
              onChange={ this.onChange }
              type="text"
              name="quantity"
              value={ this.state.quantity }
              className="form-control"/>
          </div>
          <div className="form-group">
            <label>Products</label>
            <select onChange={ this.onChange }  className="form-control">
              <option selected>Select an option...</option>
              { products }
            </select>
          </div>
        </form>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    )
  }
}

export default AddItem
