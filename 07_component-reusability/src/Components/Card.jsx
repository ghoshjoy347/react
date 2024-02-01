import React from 'react'

function Card() {

  const data = [
    {image:'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww' , name: "Amazon Basics", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ducimus. Unde, expedita!"},
    {image:'https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D' , name: "Daily Objects", description: "Lorem ipsum jgig, sit adipisicing elit. Amet, ducimus. Unde, expedita!"},
    {image:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D' , name: "Apple", description: "Lorem ipsum dolor, sietrgr gconsectetur adipisicing elit. Amet, ducimus. Unde, expedita!"}
  ]


  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200 '>
      {data.map((elem,index) => (
        <div className='w-52 bg-zinc-100 rounded-md overflow-hidden '>
        <div className='w-52 h-32 bg-zinc-300'>
          <img className="w-full h-full object-cover" src={elem.image} />
        </div>
          <div className='w-full px-3 py-4'>
            <h2 className='font-semibold'>{elem.name}</h2>
            <p className='text-xs mt-3'>{elem.description}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Card