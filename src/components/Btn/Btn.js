import './Btn.css';

function Btn({ onClick }) {
  // Créez un tableau de chiffres de 0 à 9
  const chiffres = [...Array(10).keys()];

  return (
    <div className='App-body'>
      <button className='btn' onClick={() => onClick('C')}>C</button>
      <button className='btn' onClick={() => onClick('CE')}>CE</button>
      <button className='btn' onClick={() => onClick('v2')}>v2</button>
      <button className='btn' onClick={() => onClick('/')}>/</button>
      <button className='btn' onClick={() => onClick('x')}>x</button>
      <button className='btn' onClick={() => onClick('-')}>-</button>
      <button className='btn' onClick={() => onClick('+')}>+</button>
      <button className='btn' onClick={() => onClick('.')}>.</button>
    
      {chiffres.map((chiffre) => (
        <button className='btn' key={chiffre} onClick={() => onClick(chiffre)}>{chiffre}</button>
      ))}
      <button className='btn' onClick={() => onClick('=')}>=</button>
    </div>
  );
}

export default Btn;


