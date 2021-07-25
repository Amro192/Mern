import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const TapsShow = (props) => {
    const taps = ["Tap 1 "," Tap 2 "," Tap 3"]

    const clickhandler = (e,value,i) =>{
        e.preventDefault();
        // setMsg(value +" was Taped")
        props.data(value + " was Taped");
    }
    return (
        <div>
            {
                taps.map((value,i)=>{
                    return <Button variant="contained" color="primary" key={i} onClick={(e)=>clickhandler(e,value,i)}>{value}</Button>
                })
            }
        </div>
    )
}

export default TapsShow
