import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItems from './SongItems'

const DisplayHome = () => {
  return (
    <div>
      <Navbar/>
      <div className='mb-4 mt-4'>
          <h1 className='text-purple-900 text-[20px] font-bold my-5 flex items-center'>FEATURED CHARTS</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} bgColor={item.bgColor} />))}
        </div>
      </div>
      <div className='mb-4 mt-4'>
          <h1 className='text-purple-900 text-[20px] font-bold my-5 flex items-center'>BIGGEST HITS</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item,index)=>(<SongItems key={index} name={item.name} desc={item.desc} image={item.image} duration={item.duration} id={item.id}/>))}
        </div>
      </div>
    </div>
  )
}

export default DisplayHome
