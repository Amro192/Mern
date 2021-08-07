import React from 'react';
import Main from './views/Main';
import './App.css';
import Detail from './components/Detail';
import {Router} from '@reach/router';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Main/>
      <Router>
        <Detail path="/api/product/:id" />
        <Update path="/api/product/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;