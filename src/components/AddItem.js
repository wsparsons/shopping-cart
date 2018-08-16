import React, { Component } from 'react'

class AddItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      quantity: ''
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.findProduct({
      name: this.state.product,
      quantity: this.state.quantity
    })
    this.setState({
      name: '',
      quantity: ''
    })
  }

  render () {
    const products = this.props.productsList.map(product =>
      <option
        key={ product.id }
        >{ product.name }</option>
        )

    return (
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
            <select onChange={ this.onChange } name='product' className="form-control">
              <option selected>Select an option...</option>
              { products }
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
  }
}

export default AddItem
