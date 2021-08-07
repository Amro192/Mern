import React from 'react'
import './styles/style.css'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
const ProductList=(props) => {
  const { remove } = props;
  const deleteProduct =(productId)=>{
    axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                remove(productId)
                window.location.reload()
            })

}
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
                <td><button onClick={e=>deleteProduct(product._id)}>Delete</button></td>
                </tr>
            })}
            </table>
    )
}
export default ProductList;