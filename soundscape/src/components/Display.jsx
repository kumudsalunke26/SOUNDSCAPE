import React, { useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'


const Display = () => {
  const displayRef = useRef();
  const location= useLocation();
  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 py-4 rounded bg-black text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
