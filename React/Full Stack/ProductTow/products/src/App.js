import { Router } from '@reach/router';
import Main from "./views/Main"
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Detail path="/:id" />
      </Router>
    </div>
  );
}

export default App;