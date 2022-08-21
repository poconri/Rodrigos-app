import { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState<number>(0);
  const texto:string = `mira rodrigo ya pegamos informacion en la web.`;

  const sum = () => {
    setContador(contador + 1);
  };
  const sumnt = () => {
    setContador((prevState) => {
      return prevState -1
    })
  };

  return (
    <div className="App">
      <h1>
        {`${texto} ${contador}`}
      </h1>
      <div className='button-container'>
        <button onClick={sum}>Sumar</button>
        <button onClick={sumnt}>Restar</button>
      </div>
    </div>
  );
}

export default App;
