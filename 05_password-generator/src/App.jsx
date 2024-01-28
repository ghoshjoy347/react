import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!~@#$%^&*{}[]"

for (let i = 1; i <= length; i++){
  let char = Math.floor(Math.random() * str.length + 1)
  pass += str.charAt(char)
}
  setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword])  // we can exclude setPassword, it is mostly used to optimise

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() //? is for optinally select, cos current value can be 0
    passwordRef.current?.setSelectionRange(0,99)  // we can include this or may not, but this is only to used to select the value in the desired range
    window.navigator.clipboard.writeText(password)  // we can use "window" object, directly cos we are directly using React, but during usage in Next Js we have to use it in server side rendering, in Next Js the code is executed in server side and no window object
  },[password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed,charAllowed,passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">

    <input 
    type="text" 
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder="Password"
    readOnly
    ref={passwordRef}
    />

    <button 
    onClick={copyPasswordToClipboard}
    className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>

    <div className='flex text-sm gap-x-2'>
    <div className='flex item-center gap-x-1'>
     <input 
          type="range"  
          min={6} 
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
     />
          <label>Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
        type="checkbox"
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
        type="checkbox"
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
