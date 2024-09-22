import React from 'react'
import Navbar from './Navbar'
import { albumsData, assets, songsData } from '../assets/assets'
import { useParams } from 'react-router-dom'


const DisplayAlbum = () => {
    const{id}=useParams();
    const albumData=albumsData[id];
    console.log(albumData);
  return (
    <>
      <Navbar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end' >
        <img className='w-48 rounded' src={albumData.image}/>
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h1 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h1>
            <p>{albumData.desc}</p>
            <p className='mt-1'>
                <img className='inline-block w-5' src={assets.spotify_logo}/>
                <b>Soundscape</b>

                1,23,455 likes,
                <b>50 songs,</b>
                about 2 hrs 30 mins
            </p>         
      </div>
     </div>
     <div className='pl-2 pr-2 items-center mt-10 mb-4 grid grid-cols-4 sm:grid-cols-4 gap-3'>
        <p className='mr-4 text-[20px]'>Title</p>
        <p className='mr-4 text-[20px]'>Album</p>
        <p className='mr-4 text-[20px] hidden sm:block'>Date Added</p>
        <img className='w-6' src={assets.clock_icon}/>     
     </div>
     <hr className='bg-purple-950 h-2'/>
     {
       songsData.map((item,index)=>(
        <div key={index} className='grid grid-cols-4 gap-3 pl-2 pr-2 mt-5 mb-5 items-center sm:grid-cols-4 hover:bg-purple-950 cursor-pointer text-[18px]'>
           <p>
           <img className='inline w-20 h-20 mr-4 ' src={item.image}/>
           {item.name}
           </p>
           <p className='text-[18px]'>{albumData.name}</p>
           <p className='text-[18px] hidden sm:block'>5 days ago</p>
           <p className='text-[18px]'>{item.duration}</p>
        </div>
       ))
     }
    
    </>
  )
}
export default DisplayAlbum
