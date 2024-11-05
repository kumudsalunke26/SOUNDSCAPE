

import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'
import Playlist from './Playlist'
import Music from './Music'

const Display = () => {
  const display=useRef();
  const location=useLocation();
 const isAlbum=location.pathname.includes("album");
 const albumId=isAlbum ?location.pathname.slice(-1) : "";
 const bgColor=albumsData[Number(albumId)].bgColor;
 useEffect(()=>{
  if(isAlbum)
  {
    display.current.style.background=`linear-gradient(${bgColor},#121212)`
  }
  else
  {
     display.current.style.background=`linear-gradient(${bgColor},black)`
  }
 })
  return (
    <div ref={display} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome/>}></Route>
        <Route path='/album/:id' element={<DisplayAlbum/>}></Route>
        <Route path='/playlist' element={<Playlist/>}/>
        <Route path='/music' element={<Music/>}/>
      </Routes>
    </div>
  )
}

export default Display