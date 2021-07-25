import React from 'react'
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyComponent =() => {
    const taps = ["Tap 1 "," Tap 2 "," Tap 3"]
    const [msg,setMsg]=useState("");

    const clickhandler = (e,value,i) =>{
        e.preventDefault();
        setMsg(value +" was Taped")
    }
    return (
        <div>
            {
                taps.map((value,i)=>{
                    return <Button variant="contained" color="primary" key={i} onClick={(e)=>clickhandler(e,value,i)}>{value}</Button>
                })
            }
            <p>{msg}</p>
        </div>
    )
}

export default MyComponent

