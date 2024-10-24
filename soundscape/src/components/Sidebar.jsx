import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {
  const navigate=useNavigate();
  return (
    <div className='w-[25%] m-3 h-full px-2 mt-4 pb-36 gap-2 flex-col text-white hidden lg:flex'>
      <div className='bg-[#151515] h-[20%] rounded flex flex-col justify-around'>
        <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
           <img className='w-6' src={assets.home_icon} />
           <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-2 pl-6 cursor-pointer'>
         
          <input className='text-purple-950 w-96 h-10 rounded-3xl px-3 font-bold' type = "text" placeholder="Search Your Favourite Song" />
          <div><img className='w-7' src={assets.search_icon}/></div>
                
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='gap-5 p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} />
            <img className='w-5' src={assets.plus_icon} />
          </div>
        </div>
        <div className='bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 h-48 pt-5 '>
           <h1 className='font-bold'>Create your first playlist. </h1>
           <p className='font-semibold'>It's easy , we'll help you!</p>
           <button className='px-4 py-1.5 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Create Playlist</button>
        </div>

        <div className='gap-5 items-center grid grid-cols-2 p-5 justify-between'>
        <button className='w-60 gap-2 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Recommendations</button>
        <button className='w-60 gap-2 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>New Releases</button>
        <button className='w-60 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Radio</button>
        <button className='w-60 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Feed</button>
          
          
          
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar
