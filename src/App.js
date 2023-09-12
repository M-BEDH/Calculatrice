import Btn from './components/Btn/Btn';
import './App.css';


function App() {
   const handleButtonClick = (value) => {
    // Cette fonction sera appelée lorsque vous cliquez sur un bouton avec la valeur "value".
    console.log('Button clicked with value:', value);
  };
  return (
    <div className="App">
      <header className="App-header">
          <h1>Calculatrice</h1>
         </header>
      
        <div className='App-body'>
         <Btn onClick={handleButtonClick} /> 
        </div>
    </div>
  );
}

export default App;
