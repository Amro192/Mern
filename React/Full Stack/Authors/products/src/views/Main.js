import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import AuthorForm from '../components/AuthorForm';
import { Link } from '@reach/router';

export default () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{
                setAuthors(res.data)
                setLoaded(true);
            });
    }, [])

    return (
        <div>
            
            <Link to={"/new"}>
                Add an author
            </Link>
            <h3>We Have quotes by :</h3>
            <AuthorList authors={authors} />
        </div>
    )

}