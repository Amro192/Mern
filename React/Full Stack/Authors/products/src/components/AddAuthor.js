import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import { Link } from '@reach/router';
export default (props) => {

    const [errors, setErrors] = useState([]);



    const Add = (name) => {
        setErrors([]);
        console.log(name)
        axios.post('http://localhost:8000/api/authors', name)
            .then(res => navigate("/"))
            .catch(err => {
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                if (errorArr.length >0) {
                    
                }
                else {
                    console.log(errorArr.length)
                    ;
                }
                setErrors(errorArr);
            })
    }
    return (
        <>
            <Link to={"/"}>
                Home
            </Link>
            <AuthorForm initialName="" onSubmitProp={Add} errors={errors} text="add new authour" />


        </>

    )
}