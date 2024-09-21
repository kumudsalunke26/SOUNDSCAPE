import React from 'react'

const AlbumItem = ({image,name,desc}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image}/>
      <p className='flex items-center text-[17px] py-1 font-bold'>{name}</p>
      <p className='text-sm text-slate-200'>{desc}</p>

    </div>
  )
}

export default AlbumItem
