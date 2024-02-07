import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className='mt-10 flex justify-center gap-10'>
    <NavLink style={(e) =>{
        return{
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : ""
        }
    }} to="/">Home</NavLink>

    <NavLink 
        className={(e)=> {
            return [ 
                e.isActive ? "text-green-400" : "",
                e.isActive ? "font-bold" : "",
            ].join(" ")     //array to string 
        }}
    to="/User">User</NavLink>

    <NavLink style={(e) =>{
        return{
            color: e.isActive ? "blue" : "",
            fontWeight: e.isActive ? "bold" : ""
        }
    }} to="/About">About</NavLink>
  </nav>
  )
}

export default Nav