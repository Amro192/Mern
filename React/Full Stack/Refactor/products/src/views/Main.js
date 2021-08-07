
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import { navigate } from '@reach/router';
const Main =() => {
    const [ message, setMessage ] = useState("Loading...")
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[product]);
    const removeFromDom = (productId) => {
        setProduct(product.filter(product => product._id !== productId));
        navigate("/");
    }

    const createProduct = prodct => {
        axios.post('http://localhost:8000/api/createProduct', prodct)
            .then(res=>{
                setProduct([...product, res.data]);
            })
    }
    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <br></br>
        {loaded && <ProductList products={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Main;