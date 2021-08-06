import React, { useState } from 'react'
const TaskForm = (props) => {
    const [task, setTask] = useState("");

    const addTask = (e, task) => {
        e.preventDefault();
        props.newTask(task);
        setTask("");
    };
    return (
        <form className="form" onSubmit={(e, t)=> addTask(e, task) }>
                <div>
                    <input type="text" onChange={ (e) => setTask(e.target.value) } value={task} placeholder="add a task!"/>
                </div>
                <input type="submit" value="Add" />
        </form>
    )
}


export default TaskForm