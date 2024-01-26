import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(4)    //useState hook

  //let counter = 52

  const addValue = () => {
    if(counter >= 20){
      counter = 20
    }
    else{
    counter = counter + 1
    }
    setCounter(counter)
  }

  const removeValue = () => {
    if(counter <= 0){
    counter = 0
    }
    else{
    counter = counter - 1
    }
    setCounter(counter)
  }
 

  return (
    <>
      <h1>Code and React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
