import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Dojo!
        </p>

        Things I need to do:
        <ul>
        <li>*Learn React</li>
        <li>*Run a marathon</li>
        <li>*Feed the Doogs</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
