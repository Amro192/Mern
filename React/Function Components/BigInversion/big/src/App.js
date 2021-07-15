
import PersonCard from './components/PersonalCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Black" /> 
      <PersonCard firstName="Momen" lastName="Kittaneh" age={ 88 } hairColor="Brown" /> 
      <PersonCard firstName="Amro" lastName="Othman" age={ 50 } hairColor="Brown" /> 
      <PersonCard firstName="Haitham" lastName="Abbas" age={ 62 } hairColor="Blue" /> 
    </div>
  );
}

export default App;
