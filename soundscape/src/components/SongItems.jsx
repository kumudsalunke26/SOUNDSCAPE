import React from 'react'
import { useNavigate } from 'react-router-dom'

const SongItems = ({name,image,file,desc,duration,id}) => {

  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`song/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
    <img className='rounded' src={image}/>
    <p className='flex items-center text-[17px] py-1 font-bold'>{name}</p>
    <p className='text-sm text-slate-200'>{desc}</p>
    <p className='text-sm text-slate-200'>{file}</p>
    <p className='text-sm text-slate-200'>{duration}</p>
    
      
    </div>
  )
}

export default SongItems
