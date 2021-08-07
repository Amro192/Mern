import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
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
            // console.log(product)
    },[product]);
    const remove = (productId) => {
        setProduct(product.filter(product => product._id !== productId));
    }
    return (
        <div>
            <ProductForm/>
            <br></br>
            {loaded && <ProductList products={product} remove={remove}/>}
        </div>
    )
}
export default Main;