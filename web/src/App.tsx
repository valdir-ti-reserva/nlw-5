import React, {useState} from 'react';
import './App.css';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(1);//[valor do estado, funcção que atualiza o valor do estado]

  function handleButtonClick(){
    setCounter(counter + 1);
    console.log(counter);
  }
  
  function handleMinusClick(){
    setCounter(counter - 1);
    console.log(counter);
  }

  return (
    <div>      
      <Header title="Header da Aplicação"/>
      
      <h1>{counter}</h1>

      <button type="button" onClick={handleButtonClick}>Aumentar</button>
      <button type="button" onClick={handleMinusClick}>Diminuir</button>

    </div>
  )
}

export default App;
