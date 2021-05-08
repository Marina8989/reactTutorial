import React, {Component} from 'react';
//import Product from './Product'
//import products from './vProducts'

class App extends Component{
  constructor() {
    super()
      this.state = {
        name: 'Marina',
        age: 31
      }
  }
  render() {
    return(
      <div>
          <h1>{this.state.name}</h1>
          <p>{this.state.age}</p>
      </div>
    )
  }
}


export default App


