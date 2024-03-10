import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);
  

  const addValue = () =>{
    setCounter(counter+1);
  }

  const decreaseValue = () =>{
    if(counter>0){ // using it just that value does not go negative 
      setCounter(counter - 1);
    }
    
  }
  

  return (
    <>
      <h1>Chai aur React </h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value{counter}</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
