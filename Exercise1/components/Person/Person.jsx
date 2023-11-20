import React from 'react'

const Person = (props) => {
    return (
        <p>

            <span>Name: {props.name}</span><br/>
            <span>Surname: {props.surname}</span><br/>
            <span>Age: {props.age}</span><br/>

        </p>
    )
}

export default Person