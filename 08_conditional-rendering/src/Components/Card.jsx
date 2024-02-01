import React from 'react'

function Card() {

  const data = [

  {
    name:'Shiv Stotram',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, reprehenderit laudantium enim et ullam veniam reiciendis!"
  },
  {
    name:'Hare Krishna',
    description: "Lorem ipsum jsfj fsjkhfj ahisdfi kjlf adipisicing elit. Eaque, reprehenderit fdhghdlghf enim et ullam veniam reiciendis!"
  },
  {
    name:'Aathma Raama',
    description: "Lorem ipsum dfbudkf wfbash dnlfnl kfnl  adipisicing elit. Eaque, reprehenderit laudantium enim et ullam veniam reiciendis!"
  }

]

  const handleClickDownload = () => {alert("Download in progress....")}
  const handleClickPlay = () => {alert("Connecting to Server....")}

  return (
    <div className='w-full h-screen bg-zinc-400 flex flex-col gap-5 justify-center items-center'>

     {data.map((item,index) => (
      <div className='w-60 px-3 py-2 bg-zinc-100 rounded'>
      <h3 className='font-semibold text-xl'>{item.name}</h3>
      <p className='text-xs font-medium mt-3'>{item.description}</p>
      <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 mt-3 rounded'>Download Now</button>
      <button onClick={handleClickPlay} className='px-2 py-1 bg-red-400 text-xs font-semibold text-zinc-100 mt-3 ml-3 rounded'>Play Online</button>
    </div>
     ))}

    </div>
  )
}

export default Card