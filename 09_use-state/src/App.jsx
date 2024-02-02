import React, { useState } from "react"


function App(){

  //<------------use of useState() true and false values-------------->

  // const [score,setScore] = useState(false)

  // return (

  //   <div className="p-4">

  //     <h1>{score.toString()}</h1>
  //     <button onClick={ () => setScore(!score) } className='px-2 py-1 mt-2 bg-blue-300'>Tap</button>
                                //(!score) it means that value would be once true when the button is clicked, again false when the button is clicked once again
  //   </div>


  //<-------------------------using useState to change from one number to another,i.e, here from 100 to 200---------------------------------->

  // const [score,setScore] = useState(100)

  // return (

  //   <div className="p-4">

  //     <h1>{score}</h1>
  //     <button onClick={() => setScore(200)} className='px-2 py-1 mt-2 bg-blue-300'>Tap</button>  

  //   </div>

//<-------------------------using useState to make it work like counter ,counting value one after the other---------------------------------->

  // const [score,setScore] = useState(0)

  // return (

  //   <div className="p-4">

  //     <h1>{score}</h1>
  //     <button onClick={() => setScore((prev)=>prev+1)} className='px-2 py-1 mt-2 bg-blue-300'>Tap</button>         {/*it works like counter */}

  //   </div>




  const [val,setVal] = useState({name:"joy", isLoggedIn: false})

  return (

    <div className="p-4">

      <h1>name:{val.name}</h1>
      <h2>isLoggedIn:{val.isLoggedIn.toString()}</h2>                     {/*boolean values doesnt get printed, so it needs to convert to string*/}
      <button onClick={()=>setVal({...val, isLoggedIn: !val.isLoggedIn})} className="mt-2 px-3 py-1 bg-blue-400 rounded-full text-white">Change</button>

    </div>
  
  )
}

export default App