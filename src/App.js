import React, { Component } from "react";
import { ProductList } from "./components/ProductList";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='card' >
          <ProductList /> 
      </div>
    );
  }
};
export default App;
