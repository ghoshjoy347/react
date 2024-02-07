import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import User from '../components/User'
import About from '../components/About'
import UserDetail from '../components/UserDetail'

function Routing() {
  return (
    <Routes>


  <Route path='/' element={<Home />} />
  <Route path='/User' element={<User />}> 

  <Route path='/User/:name' element={<UserDetail />} />

  </Route>
  <Route path='/About' element={<About />} />


  </Routes>
  )
}

export default Routing