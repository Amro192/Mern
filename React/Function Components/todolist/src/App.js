import AddTodo from './components/AddTodo';
import  TaskForm from './components/TaskForm';
import React,{useState} from 'react';
import './App.css';

function App() {
const [allTasks,setAllTasks]=useState([]);
const addToList=(task)=>{
  if(task!==''){
    setAllTasks([...allTasks,{taskName:task,checked:false}]) 
  }
};
const deleteTask=(e,index)=>{
  setAllTasks([...allTasks.slice(0,index), ...allTasks.slice(index+1)]);
};
const  taskDone=(e,index)=>{
  const updatedTasks=allTasks.map((task,idx)=>{
if(idx===index){
  task.checked=!task.checked;
}
return task; 
  });
  setAllTasks(updatedTasks);
}
  return (
  <div className="App">
  <TaskForm newTask={addToList}/>
  <>
    {
      allTasks.map((task_name,idx)=>{
        return (
        <AddTodo  task={task_name} taskDone={taskDone} delete={deleteTask} index={idx}  />
        );
      })
    }
  </>
  </div>
  );
}

export default App;