import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import { Link } from '@reach/router';
export default (props) => {
const {id}=props
    const[name,setName]=useState([])
    var x=""
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/"+id)
            .then(res =>{
                setName( res.data)
            });
            
    }, [])


    const update = (name) => {
        setErrors([]);
        console.log(name)
        axios.put('http://localhost:8000/api/authors/'+id, name)
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
            <AuthorForm initialName={name.name} onSubmitProp={update} errors={errors} text="update" />
        </>
    )
}