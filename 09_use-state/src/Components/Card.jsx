import React from 'react'

// <----------------for line number 171-178 in App.jsx-------------->
// function Card({text,color}) {
//   return (
//     <button className={`px-3 py-1 ${color} rounded text-zinc-200 text-xs m-2`}>{text}</button>
//   )
// }

function Card({values,handleClick,index}) {

  const {name,image,profession,friends} = values

  return(
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-40 bg-sky-200'>
        <img className='w-full h-full object-cover object-center' src={image} alt="" />
      </div>
      <div className='w-full p-3 '>
        <h3 className='text-xl font-semibold '>{name}</h3>
        <h5 className='text-xs'>{profession}</h5>
        <button onClick={()=>handleClick(index)} className={`mt-4 px-3 py-1 text-xs rounded-md text-white ${friends ? "bg-green-400" : "bg-blue-400"}`}>{friends === true ? "Friends" : "Add Friend"}</button>
      </div>
    </div>
  )
}


export default Card