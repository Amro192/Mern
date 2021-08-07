import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';
import Button from "./Button"


export default (props) => {
    const { authors } = props
    const [auth,setAuth]=useState(authors)
    const deleteAuthor=(authorid)=>{
        axios.delete('http://localhost:8000/api/authors/' + authorid)
        .then(res => {
            setAuth(auth.filter(auth => auth._id !== authorid));
        })
    }
    const editAuthor =(authorid)=>{
        navigate("/edit/"+authorid)
    }
    return (
        <div>
            <table >
                <tr>
                    <th>Author Name</th>
                    <th>Action Avalabel</th>
                </tr>
                {auth.map((author, idx) => {
                    return (<>

                        <tr>
                            <td>{author.name}</td>
                            <td>
                            
                                <Button click="Delete" successCallback={deleteAuthor} authorId={author._id}  />
                                <Button click="edit" successCallback={editAuthor} authorId={author._id} />
                            </td>
                        </tr>                                                               
                    </>
                    )

                })}
            </table>
        </div>
    )

}