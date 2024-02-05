import React from 'react'

function Card({data,handleClick,index}) {

    const {image,artist,added,name} = data
  
    return (
      <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-10'>
        <div className='w-20 h-20 bg-orange-400 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover ' src={image} alt="" />
        </div>
        <div>
          <h3 className='text-xl leading-none font-semibold'>{name}</h3>
          <h6 className='text-sm  whitespace-nowrap'>{artist}</h6>
          </div>
        <button onClick={()=>handleClick(index)} className={`px-3 py-2 ${added === false ? "bg-orange-500 shadow-inner" : "bg-gray-100 shadow-inner text-orange-400 font-semibold"} bottom-0 translate-y-[50%] left-1/2 -translate-x-[50%] absolute text-white text-xs whitespace-nowrap rounded-full`}>{added === false ? "Add to Playlist" : "Already Added"}</button>
      </div>
    )
  }
  
  
  
  
  export default Card