import React, { useState } from "react"
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App(){


const data = [
  {image:'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D',name:'Dil Hareya',artist:'Ayushmann Khurana',added:false},
  {image:'https://images.unsplash.com/photo-1517230878791-4d28214057c2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2VyfGVufDB8fDB8fHww',name:'Mahi Ve',artist:'Nikita Gandhi',added:false},
  {image:'https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fHww',name:'Zinda',artist:'Arijit Singh',added:false},
  {image:'https://images.unsplash.com/photo-1527735095040-147bffb4cede?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ2VyfGVufDB8fDB8fHww',name:'Vultures',artist:'Kanya West',added:false},
  {image:'https://images.unsplash.com/photo-1571310100246-e0676f359b42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D',name:'One Love',artist:'Shubh',added:false},
  {image:'https://images.unsplash.com/flagged/photo-1564434369363-696a2e6d96f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D',name:'Shape of You',artist:'Ed Sheeran',added:false},
  {image:'https://images.unsplash.com/photo-1534205643743-6737932c79ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D',name:'Tera Chehra',artist:'Adnan Sami',added:false},
  {image:'https://images.unsplash.com/photo-1612976023590-be5b6a14051d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D',name:'Dil Diyan Gallan',artist:'Atif Aslam',added:false},
  {image:'https://images.unsplash.com/photo-1599467556534-6a0cfcb0daf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D',name:'Love Dose',artist:'Yo Yo Honey Singh',added:false},
  {image:'https://images.unsplash.com/photo-1600962815726-457c46a12681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D',name:'Stairway to Heaven',artist:'Led Zeppelin',added:false},
  {image:'https://images.unsplash.com/photo-1636662254874-2e4832027ceb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D',name:'Jannat',artist:'Aatish ',added:false},
  {image:'https://images.unsplash.com/flagged/photo-1564434332906-14db07a1d389?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D',name:'Senorita',artist:'Camila Cabello',added:false},
  {image:'https://images.unsplash.com/photo-1604513843835-cda9439cca7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D',name:'Channa Mereya',artist:'Arijit Singh',added:false},
  {image:'https://images.unsplash.com/photo-1599467556385-48b57868f038?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D',name:'Hawa Hawai',artist:'Kavita Krishnamurthy',added:false},
  {image:'https://images.unsplash.com/photo-1550560888-1009463ef168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D',name:'Skyfall',artist:'Adele ',added:false},
]


const [songData,setSongData] = useState(data)
const handleClick = (index) =>{
  setSongData((prev)=> {
    return prev.map((item,itemIndex)=>{
      if(itemIndex === index) return {...item, added: !item.added} 
      return item
    })
  })
}

return (
  <>
  <div className="w-full h-screen bg-zinc-300">
    <Navbar data={songData}/>
    <div className="px-20 flex gap-10 mt-10 flex-wrap">
    {songData.map((obj,index)=>(
      <Card data={obj} handleClick={handleClick} index={index} key={index}/>
    ))}
    </div>
  </div>
  </>
)
}
export default App