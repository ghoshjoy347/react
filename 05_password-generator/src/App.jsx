import { useState,useCallback } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!~@#$%^&*{}[]"

for (let i = 1; i <= array.length; i++){
  let char = Math.floor(Math.random() * str.length + 1)
  pass = str.charAt(char)
}
  setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  return (
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700'>
        
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

    <input 
    type="text" 
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder="Password"
    readOnly
    />

    <button className='outline-none bg-blue-800 text-white px-3 py-1 shrink-0'>copy</button>

      </div>

    <div className='flex text-sm gap-x-2'>
    <div className='flex item-center gap-x-1'>
     <input 
          type="range"  
          min={6} 
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)}
     />
          <label>Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
        type="checkbbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setnumberAllowed((prev) => !prev)
        }}
       />
       <label htmlFor="numberInput">Number</label>
    </div>

     <div className='flex items-center gap-x-1'>
      <input 
        type="checkbbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={() => {
          setcharAllowed((prev) => !prev)
        }}
       />
        <label htmlFor="characterInput">Characters</label>
    </div> 
      </div>
      </div>
  )}
  
export default App
