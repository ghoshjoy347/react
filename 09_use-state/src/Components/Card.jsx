import React from 'react'

function Card({text,color}) {
  return (
    <button className={`px-3 py-1 ${color} rounded text-zinc-200 text-xs m-2`}>{text}</button>
  )
}

export default Card