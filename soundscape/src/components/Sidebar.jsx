import React, { useEffect, useRef } from 'react'
import{assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  
const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
      <div className='bg-slate-900 h-[13%] rounded flex flex-col justify-around'>
        <div className='flex flex-col-2 pl-5'>
        <img className='h-20 w-20 rounded-3xl ml-5 mt-2' src={assets.img}/>
        <img className='h-10 w-72 rounded-xl ml-7 mt-7' src={assets.ss}/>
        </div>
        
        
        
        
      </div>
      <div className='bg-slate-900 h-[85%] rounded'>
      <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-5 pt-5 cursor-pointer'>
            <img className='w-9 pt-5 ' src={assets.home_icon} alt=""/>
            <p className='pt-5 w-20 pl-3 text-[1.5rem] font-bold'>Home</p>
        </div>
        {/* <div className='p-4 flex items-center justify-between'>
       
            <div className='flex items-center gap-3'>
                <img className='w-8' src={assets.stack_icon} alt=""/>
                <p className='font-semibold'>Your Library</p>
            </div>
            <div className='flex items-center gap-3'>
                <img className='w-5' src={assets.arrow_icon} alt=""/>
                <img className='w-5' src={assets.plus_icon} alt=""/>
            </div>
        </div> */}
        <div className='p-4 bg-slate-800 pt-6 rounded font-semibold flex flex-col items-start justify-start gap-1 ml-5 mr-5 h-44 mt-7'>
            <h1 className='text-[22px]'>Create Your First Playlist!</h1>
            <p className='font-semibold'>It's easy, we'll help you.</p>
            <button onClick={()=>(navigate("/playlist"))} className='px-4 py-1.5 hover:bg-slate-400 bg-black text-[18px] text-white rounded-full mt-4'>Create playlist</button>
        </div>
        <div className='mt-9 ml-5 mr-5'>
          <img className='h-[30rem] w-[50rem]' src={assets.img}/>
        </div>
        
      </div>
    </div>
    
  )
}

export default Sidebar