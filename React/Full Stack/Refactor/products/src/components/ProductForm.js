import React, { useState } from 'react'
import axios from 'axios';
const ProductForm= (props) => {
    const { initialTitle, initialPrice,initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescrption] = useState(initialDescription);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
        setTitle("")
        setPrice("")
        setDescrption("")
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescrption(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default ProductForm;