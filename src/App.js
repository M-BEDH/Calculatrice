import React, { useState } from 'react';
import Btn from './components/Btn/Btn';
import { evaluate } from 'mathjs';

import './App.css';



function App() {
  const [expression, setExpression] = useState('');

  const handleClickButton = (value) => {
    if (value === 'C') {
      setExpression('');
    } else if (value === 'CE') {
      setExpression(expression.slice(0, -1));
    } else if (value === '=') {
      try {
        const result = evaluateExpression(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Erreur');
      }
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const evaluateExpression = (expr) => {
    try {
      return evaluate(expr);
    } catch (error) {
      return 'Erreur';
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
        <Btn onClick={handleClickButton} />
       
      </div>
    </div>
  );
}

export default App;