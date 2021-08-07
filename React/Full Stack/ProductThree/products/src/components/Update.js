import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate } from '@reach/router';
const Update = (props) => {
    const { id } = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescrption] = useState("");
    useEffect(() => {
        if(id !==null){
            axios.get('http://localhost:8000/api/product/'+id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescrption(res.data.description);
            })
        }
    
    }, [id])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/'+id+'/edit', {
            title,
            price,
            description
        })
            .then(res => console.log(res), navigate("/api/products"));
    }
    return (
        <div>
            <h1>Update {title} Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price" 
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescrption(e.target.value) }} />
                </p>
                <input type="submit" value="Update"/>
            </form>

        </div>
    
    )
}
export default Update;