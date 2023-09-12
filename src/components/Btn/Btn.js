import './Btn.css';

function Btn({ onClick }) {
  const chiffresEtOperateurs = ['C', 'CE','/', '*', '-', '+', '.','%', '**', ...Array(10).keys(), '='];

  return (
    <div className='App-body'>
      {chiffresEtOperateurs.map((value) => (
        <button className='btn' key={value} onClick={() => onClick(value)}>
          {value}
        </button>
      ))}
    </div>
  );
}

export default Btn;


