import './App.css';
import BoxForm from './components/BoxForm';
import Box from './components/Box';
import { useState } from 'react';
import React from 'react';
function App() {

  const [box, setBox] = useState([]);


  const createBox = (height, width, color) => {
    var boxadd= {
      height: (height + "px"),
      width: (width + "px"),
      color: color
    }

    setBox([...box, boxadd]);
    console.log(box);


  }
  return (
    <>
      <BoxForm proparity={createBox} />
      <Box boxadd={box} />
    </>
  );
}

export default App;