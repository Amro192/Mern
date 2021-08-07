import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
const Update = (props) => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [id])
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id+'/edit', product)
            .then(res => console.log(res), navigate("/"));
    }

    return (
        <div>
            {loaded &&( <>
            <h1>Update {product.title} Product</h1>
            <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />
            <DeleteButton productId={product._id} successCallback={()=>navigate("/")} />
            </>
            
            )}
        </div>
    
    )
}
export default Update;  