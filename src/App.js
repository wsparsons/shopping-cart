import React, { Component } from 'react';
import CartHeader from './components/CartHeader'
import CartItems from './components/CartItems'
import CartFooter from './components/CartFooter'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <CartHeader />
        <CartItems />
        <CartFooter copyright="2016"/>
      </div>
    );
  }
}

export default App;
