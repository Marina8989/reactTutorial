import React from 'react' 
import SearchButton from './SearchButton'

function Product(props) {
     return(
         <div>
             <h2>{props.name}</h2>
             <p>${props.price} - {props.description}</p>
             <SearchButton />
             <br />
         </div>
     )
}


export default Product