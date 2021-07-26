import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Welcome from './components/Welcome';
import Numbers from './components/Numbers';
import Words from './components/Words';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Welcome path="/home" />
          <Numbers path="/:object"/>
          <Words path="/:word/:color1/:color2"/>
        </Router>
      </header>
    </div>
  );
}

export default App;
