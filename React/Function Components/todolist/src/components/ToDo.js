import React from 'react'

const ToDo = (props) => {
    const class_name=[];
    if(props.task.checked){
    class_name.push("crossed-line")

    }
    return(
        <div>
        <input type="checkbox" onChange={(e)=>{
            props.taskDone(e, props.index)
        }}  
        checked={props.task.checked}></input>
        <label className={class_name}>{props.task.taskName}</label>
        <button class="button" onClick={(e)=>{props.delete(e,props.index)}} >Delete Task</button>
    </div>
    );
}
export default ToDo
