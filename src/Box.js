import React from 'react'
import InputBox from './InputBox'

function Box() {
    return (
        <div>
            <InputBox
                contact={{text: 'text', name: 'name', placeholder: 'Enter name', lab: 'Name'}}
             />
             <InputBox
                contact={{text: 'text', name: 'lastname', placeholder: 'Enter lastname', lab: 'Lastname'}}
             />
        </div>
    )
}


export default Box