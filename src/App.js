import React, { useState } from 'react';
import Btn from './components/Btn/Btn';
import './App.css';


function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClickButton = (value) => {
    // Cette fonction sera appelée lors du click sur un bouton avec la valeur "value".
    console.log('Button clicked with value:', value);
    if (value === '=') {
      try {
  
          const evalResult = evaluateExpression(expression);//evalue l'expression
        setResult(evalResult.toString()); //Met à jour le résultat
        setExpression(''); //Réinitilise l'expression
      } catch (error) {
        setResult('Erreur');
      }
    } else {
       setExpression((prevExpression) => prevExpression + value);
    }
   };

   const evaluateExpression = (expr) => {
     // Implémentez votre propre logique d'évaluation ici
    // Vous pouvez utiliser des bibliothèques tierces pour vous aider dans cette tâche
    // Assurez-vous de gérer correctement les erreurs et les opérations mathématiques

    // Exemple simple en utilisant eval (ceci est pour démonstration seulement)
    return eval(expr);
     
     
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
          readOnly={true}
        />
         <Btn onClick={handleClickButton} />
      
          <input
            type='text'
            className='resultat-input'
            value={result}
            readOnly={true}
          />     
        
        
        </div>
    </div>
  );
}

export default App;
