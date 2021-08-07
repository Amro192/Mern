import React from 'react'
import './styles/style.css'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
const ProductList=(props) => {
const { removeFromDom } = props;

    return (
            <table >
            <tr>
                <th>Product Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>View Product</th>
                <th>Edit Product</th>
                <th>Delete Product</th>
            </tr>
            {props.products.map((product)=>{
            return <tr>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td><Link to={`/api/product/${product._id}`}>View Details</Link></td>
                <td><Link to={`/api/product/${product._id}/edit`}>Edit</Link></td>
                <td><DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/></td>
            </tr>
            
        })}
            </table>
    )
}
export default ProductList;