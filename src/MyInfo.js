import React from 'react'

function MyInfo(props) {
    return (
        <div>
            <h1>{props.contact.name} -  {props.contact.age} years old</h1>
            <p>I am a {props.contact.job}</p>
            <br />
        </div>
    )
}


export default MyInfo