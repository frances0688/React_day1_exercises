import React, {Component} from 'react'

export class PersonClass extends Component {
    render() {
        return (
            <p>

                <span>Name: {this.props.name}</span><br/>
                <span>Surname: {this.props.surname}</span><br/>
                <span>Age: {this.props.age}</span><br/>

            </p>
        )
    }
}

export default PersonClass