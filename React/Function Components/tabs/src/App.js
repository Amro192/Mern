import {useState} from 'react'
import './App.css';
import MyComponent from './components/MyComponent';
import TapsShow from './components/TapsShow';
import TapsDisplay from './components/TapsDisplay';

function App() {
  const [data , setData ] = useState("");
  const newContent = (content)=>{
    setData(content)
  }
    return (
    <div className="App">
      <header className="App-header">
      {/* <MyComponent  /> */}
      <TapsShow data={newContent}/>
      <TapsDisplay content={data}/>
      </header>
    </div>
  );
}

export default App;
