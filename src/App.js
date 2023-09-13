import React, { useState } from 'react';
import { evaluate, sqrt } from 'mathjs';
import './App.css';
import Btn from './components/Btn/Btn';

function App() {
  const [expression, setExpression] = useState('');

  const handleClickButton = (value) => {
    if (value === 'C') {
      setExpression('');
    } else if (value === 'CE') {
      setExpression(expression.slice(0, -1));
    } else if (value === '=') {
      try {
        const result = evaluate(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Erreur');
      }
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const handleSquareRoot = () => {
    try {
      const result = sqrt(evaluate(expression));
      setExpression(result.toString());
    } catch (error) {
      setExpression('Erreur');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculatrice</h1>
      </header>
      <div className='App-body'>
        <input
          type='text'
          className='expression-input'
          value={expression}
          readOnly
        />
        <Btn onClick={handleClickButton} onSquareRoot={handleSquareRoot} />
      </div>
    </div>
  );
}

export default App;
