import './Btn.css';

function Btn({ onClick, onSquareRoot }) {
  const chiffresEtOperateurs = [
    'C', 'CE', '(', ')', '/', '*', '-', '+',  ...Array(10).keys(), '.', '%', '^', '√', ' ', '='
  ];

  return (
    <div className='btn-body'>
      {chiffresEtOperateurs.map((value) => (
        <button className='btn' key={value} onClick={() => {
          if (value === '√') {
            onSquareRoot();
          } else {
            onClick(value);
          }
        }}>
          {value}
        </button>
      ))}
    </div>
  );
}

export default Btn;


