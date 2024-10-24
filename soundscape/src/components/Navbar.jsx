import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-4'>
        <img onClick={()=>navigate(-1)} className='w-8 bg-purple-900 p-2 rounded-2xl cursor-pointer' src={assets.arrow_left}/>
        <img onClick={()=>navigate(+1)} className='w-8 bg-purple-900 p-2 rounded-2xl cursor-pointer' src={assets.arrow_right}/>
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-purple-950 text-purple-400 rounded-2xl text-[17px] font-semibold px-4 py-1 cursor-pointer'>Explore Premium</p>
            <p className='bg-white text-zinc-600 rounded-2xl text-[17px] font-semibold px-3 py-1 cursor-pointer'>Install App</p>
            <p className='bg-green-700 rounded-full flex items-center font-semibold px-4 py-1 text-[17px]'>K</p>
        </div>
      </div>
      
      <div className='flex items-center gap-2 mt-4'>
            <p className='px-4 py-1 rounded-3xl bg-white text-[17px] cursor-pointer text-zinc-600 font-semibold'>All</p>
            <p className='px-4 py-1 rounded-3xl text-[17px] cursor-pointer bg-purple-900 text-white'>Music</p>
            
        </div>
    </>
  )
}

export default Navbar
