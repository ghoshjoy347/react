import React, { useState } from "react"
import { FaArrowRight } from "react-icons/fa";
import Card from "./Components/Card";

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


//<--------------------------------------for true its blue and for false its red--------------------------------------------------------------->

  // const [val,setVal] = useState({name:"joy", isLoggedIn: false})

  // return (

  //   <div className="p-4">

  //     <h1>name:{val.name}</h1>
  //     <h2>isLoggedIn:{val.isLoggedIn.toString()}</h2>                     {/*boolean values doesnt get printed, so it needs to convert to string*/}
  //     <button onClick={()=>setVal({...val, isLoggedIn: !val.isLoggedIn})} className={`mt-2 px-3 py-1 ${val.isLoggedIn ? "bg-blue-400" : "bg-red-400"} rounded-full text-white`}>Change</button>

  //   </div>

  //<-----------------------------------------to update the field, but it won't update immediately after updating-------------------------------------------------------------------------------->
  
//   const [val,setVal] = useState({name:"joy", age: 22})

//   return (

//     <div>
//       <button onClick={() => setVal({...val,gender: "male"})}>Click</button>    {/*it would update but not right after the fieid is updated*/}
//     </div>
  
//   )
// }

//<--------------------------------------------removing the last element on click---------------------------------------------------------------------------------------->

// const [val,setVal] = useState([1,2,3,4,5,6])

//   return (

//     <div>
//       {val.map(item=><h1 className="ml-8">{item}</h1>)}
//       <button onClick={()=>setVal(()=>{
//         return val.filter((item,index) => index!=val.length-1)
//       })}className="px-2 py-1 ml-4 mt-2 bg-blue-400 rounded-full text-xs text-white">Click</button>
//     </div>
  

//<------------------------------------------------removing divisible by 2 from the array---------------------------------------------------------------------------->


// const [val,setVal] = useState([1,2,3,4,5,6])

//   return (

//     <div className="p-5">
//       {val.map(item=><h1>{item}</h1>)}
//       <button onClick={()=>setVal(()=>val.filter((item,index)=> item%2 !== 0))}className="px-2 py-1 ml-4 mt-2 bg-blue-400 rounded-full text-xs text-white">Click</button>
//     </div>

//   )
// }

//<----------------------------------------------------add element at the end of an array---------------------------------------------------------------->

// const [val,setVal] = useState([1,2,3,4,5,6])

//   return (

//     <div className="p-5">
//       {val.map(item=><h1>{item}</h1>)}
//       <button onClick={()=>setVal([...val,7])} className="px-2 py-1 ml-4 mt-2 bg-blue-400 rounded-full text-xs text-white">Click</button>
//     </div>

//   )
// }

//<----------------------------------------------------add element at last---------------------------------------------------------------->

// const [val,setVal] = useState([
//   {name:"joy", age: 22},
//   {name:"messi", age: 25},
//   {name:"virat", age: 35},
// ])

//   return (

//     <div className="p-5">
//       {val.map((item) => ( 
//       <div>
//       <h1>{item.name}</h1>
//       <h2>{item.age}</h2>
//       </div>
//       ))}
//       <button onClick={()=>setVal(()=>val.map((item)=>(item.name) === "messi" ? ({name:"messi", age: 37}) : item))} className="px-2 py-1 bg-blue-400 rounded-full text-xs text-white">Click</button>
//     </div>


//<---------------------------------------------------------------------------------------------------------------------------------------->

  // const [val,setVal] = useState(false)

  // return (

  //   <div className="p-4">

  //     <h1>
  //       {val === false ? "Go" : "Don't Go"}
  //     </h1>
     
  //   <button onClick={()=>setVal(()=>!val)} className="px-3 py-1 bg-blue-400">Change</button>
  //   </div>

//<------------------------------------------Image slider---------------------------------------------------------------------------->

// const [val,setVal] = useState(false)

// return (
//   <div className='w-full h-screen flex justify-center items-center'>
//     <div className='relative w-60 h-32 rounded-md flex overflow-hidden'>
//       <img className={`shrink-0 transition-transform duration-700 ${val === false ? "-translate-x-[0%]" :  "-translate-x-[100%]"} w-full h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1670758941284-bc28b71aa134?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//       <img className={`shrink-0 transition-transform duration-700 ${val === false ? "-translate-x-[0%]" :  "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1627826676816-595b15b9651f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" alt="" />
//       <span onClick={()=>setVal(()=>!val)}className="w-8 h-8 flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
//       <FaArrowRight size={"0.7em"}/>
//       </span>
//     </div>
//   </div>

//<------------------------------------------------------------------------------------------------------------------------------------>

  // return (
  //   <>
  //   <Card text="Know More" color="bg-red-600"/>
  //   <Card text="Download" color="bg-green-600"/>
  //   <Card text="Play Online" color="bg-purple-600"/>
  //   <Card text="Next Page" color="bg-blue-600"/>
  //   </>
  // )

  // }
//<-------data will be on main app component ,with the help of use props we have to pass to Card, each Card has add friend button, after clicking add friend button we will get an alert-------->


const data = [
  {name: "Roger", profession:"Cricketer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", friends :false},
  {name: "Trent", profession:"Footballer", image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", friends :false},
  {name: "Robin", profession:"Actor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww", friends :false},
  {name: "Jackson", profession:"Singer", image: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww", friends :false},
];

const [realData,setRealData] = useState(data)
//wherever there's a state, only there we can modify
const handleFriendsButton = (cardindex)=> {
  setRealData((previous)=>{
    return previous.map((item,index)=>{
      if(index === cardindex){
        return {...item, friends: !item.friends}
      }
      return item
  })
})
}

return (
  <>
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
     {realData.map((item,index)=>(
      <Card key={index} handleClick={handleFriendsButton} index={index} values={item}/>
     ))}
    </div>
  </>
)

} 

export default App