import './App.css';
import './components/PersonCard';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Doe" lastName="Jane" age={20} hairColor="Black"/>
      <PersonCard firstName="Smith" lastName="John" age={49} hairColor="Brown"/>
      <PersonCard firstName="Amro" lastName="Othman" age={80} hairColor="Brown"/>
      <PersonCard firstName="Smith" lastName="Maria" age={68} hairColor="Brown"/> 
    </div>
  );
}

export default App;
