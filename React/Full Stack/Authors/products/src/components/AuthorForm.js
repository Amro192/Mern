import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default (props) => {
        const { initialName,onSubmitProp,errors,text} = props;
        const [name, setName] = useState(initialName);
        
        const onSubmitHandler = e => {
            e.preventDefault();
            onSubmitProp({name});
        }  
        return (
            <>
            <p>{text}</p>
            
        {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name</label><br />
                    <input 
                        type="text" 
                        name="Name" value={name} 
                        onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            </>
        )
        }