import React from 'react';
import Product from './Product'
import products from './vProducts'


function App() {
    const productItems = products.map(item => <Product key={item.id} name={item.name} price={item.price} description={item.description}/>)

  return (
       <div>
           { productItems }
       </div>
  );
}

export default App;
