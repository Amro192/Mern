import React, { Component } from 'react'
class PersonCard extends Component {
        constructor(props) {
            super(props);
            this.state={
                age : this.props.age
            };
        }

        render() {
            const{firstName, lastName, age ,hairColor} = this.props;
        return (
            <div>
                <h1>{firstName}, {lastName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Hair Color: {hairColor}</h3>
                <button onClick={this.plusAge }>Add one</button>
            </div>
        )
    }
    plusAge = () => {
        this.setState({age: this.state.age + 1 })
    }
}

export default PersonCard
