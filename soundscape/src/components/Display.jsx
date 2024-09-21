import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'


const Display = () => {
  return (
    <div className='w-[100%] m-2 px-6 py-4 rounded bg-black text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome/>}/>
      </Routes>
    </div>
  )
}

export default Display
