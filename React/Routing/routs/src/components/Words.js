import React from 'react'

const Words = (props) => {
        return (
            <div style={{background:props.color2 , width:(500)}}>
                <h2 style={{color:props.color1}}>The word is: {props.word}</h2>
            </div>
        )
    }

export default Words
