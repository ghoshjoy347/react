import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail() {

const {name} = useParams()
const navigate = useNavigate()

const GoBackHandler = () => {
  // navigate('/User')    // this is used to go to the desired page/links, not only back
  navigate(-1)           // this is used to go one step back only
  console.log("go back");
}

  return (
    <div className=' mt-10'>
        <h1 className='text-3xl mb-2'>User Detail</h1>
        <h1 className='text-3xl mb-2'>Hi !! {name}</h1>
        <button onClick={GoBackHandler} className='mt-5 px-3 py-2 bg-green-200'>Go Back</button>
    </div>
    
  )
}

export default UserDetail