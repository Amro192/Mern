import React from 'react'

const Numbers = (props) => {
    if(isNaN(props.object)) {
        return (
            <div>
                <h2>The word is: {props.object}</h2>
            </div>
        )
    }
    return (
        <div>
            <h2>The number is: {props.object}</h2>
        </div>
    )
}


export default Numbers
