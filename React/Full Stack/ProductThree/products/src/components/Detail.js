import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Detail=(props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        // console.log(props.id)
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))

    }, [props.id])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}
export default Detail;