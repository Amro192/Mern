import React from 'react'

import { Link } from '@reach/router';


const ProductList=(props) => {
    
    
    return (
        <div>
            {props.product.map((product, idx)=>{
                return (<>
                <Link to = {"/"+product._id}>{product.title}</Link>
                <br></br>
                </>
                )
                
            })}
        </div>
    )
}
export default ProductList;