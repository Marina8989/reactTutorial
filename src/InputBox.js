import React from 'react'

function InputBox(props) {
   return (
       <div>
           <form> 
                <input type={props.contact.text} class={props.contact.name} placeholder={props.contact.placeholder} />
                <label for="name">{props.contact.lab}</label>
                <br />
            </form>
       </div>
   )
}

export default InputBox