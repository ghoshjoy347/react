import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='w-1/2 m-auto mt-10'>
        <h1 className='text-3xl mb-2'>User</h1>
        
        <div className='flex w-1/2 flex-col mt-5'>

        <Link className='p-3 bg-green-200 text-2xl mb-3 hover:bg-green-300' to="/User/Steve" >Steve</Link>
        <Link className='p-3 bg-green-200 text-2xl mb-3 hover:bg-green-300' to="/User/Aaron" >Aaron</Link>
        <Link className='p-3 bg-green-200 text-2xl mb-3 hover:bg-green-300' to="/User/Josh" >Josh</Link>

        </div>
        <hr/>
        <Outlet/> 

    </div>
  )
}

export default User