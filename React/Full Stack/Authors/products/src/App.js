  
import Main from "./views/Main"
import Update from "./components/Update"
import AddAuthor from "./components/AddAuthor"
import { Router } from '@reach/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Router>
      <Main path="/"/>
      <AddAuthor path="/new" />
      <Update path="/edit/:id"/>
      </Router>

    </div>
  );
}

export default App;