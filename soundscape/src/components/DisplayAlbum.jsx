// import React, { useContext } from 'react'

// import { albumsData, assets, songsData } from '../assets/assets'
// import { useParams } from 'react-router-dom'
// import { PlayerContext } from '../context/PlayerContext'


// const DisplayAlbum = () => {
//   const {playWithId}=useContext(PlayerContext);
//     const{id}=useParams();
//     const albumData=albumsData[id];
//     console.log(albumData);
//   return (
//     <>
      
//       <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end' >
//         <img className='w-48 rounded' src={albumData.image}/>
//         <div className='flex flex-col'>
//             <p>Playlist</p>
//             <h1 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h1>
//             <p>{albumData.desc}</p>
//             <p className='mt-1'>
//                 <img className='inline-block w-5' src={assets.spotify_logo}/>
//                 <b>Soundscape</b>

//                 1,23,455 likes,
//                 <b>50 songs,</b>
//                 about 2 hrs 30 mins
//             </p>         
//       </div>
//      </div>
//      <div className='pl-2 pr-2 items-center mt-10 mb-4 grid grid-cols-4 sm:grid-cols-4 gap-3'>
//         <p className='mr-4 text-[20px]'>Title</p>
//         <p className='mr-4 text-[20px]'>Album</p>
//         <p className='mr-4 text-[20px] hidden sm:block'>Date Added</p>
//         <img className='w-6' src={assets.clock_icon}/>     
//      </div>
//      <hr className='bg-purple-950 h-2'/>
//      {
//        songsData.map((item,index)=>(
//         <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-4 gap-3 pl-2 pr-2 mt-5 mb-5 items-center sm:grid-cols-4 hover:bg-purple-950 cursor-pointer text-[18px]'>
//            <p>
//            <img className='inline w-20 h-20 mr-4 ' src={item.image}/>
//            {item.name}
//            </p>
//            <p className='text-[18px]'>{albumData.name}</p>
//            <p className='text-[18px] hidden sm:block'>5 days ago</p>
//            <p className='text-[18px]'>{item.duration}</p>
//         </div>
//        ))
//      }
    
//     </>
//   )
// }
// export default DisplayAlbum

// import React, { useContext } from 'react';
// import Navbar from './Navbar';
// import { useParams } from 'react-router-dom';
// import { albumsData, assets, songsData } from '../assets/assets';
// import { PlayerContext } from '../context/PlayerContext';

// const DisplayAlbum = () => {
//     const { id } = useParams();
//     const albumData = albumsData[id];
//     const { playWithId } = useContext(PlayerContext);

//     // Determine the range of songs to display based on album ID
//     let displayedSongs = [];
//     switch (id) {
//         case '0':
//             for (let i = 0; i <= 13; i++) {
//                 displayedSongs.push(songsData[i]);
//             }
//             break;
//         case '1':
//             for (let i = 14; i <= 17; i++) {
//                 displayedSongs.push(songsData[i]);
//             }
//             break;
//         case '2':
//             for (let i = 18; i <= 20; i++) {
//                 displayedSongs.push(songsData[i]);
//             }
//             break;
//         case '3':
//             for (let i = 21; i <= 24; i++) {
//                 displayedSongs.push(songsData[i]);
//             }
//             break;
//         case '4':
//             for (let i = 25; i <= 28; i++) {
//                 displayedSongs.push(songsData[i]);
//             }
//             break;
//         case '5':
//             for (let i = 29; i <= 32; i++) {
//                 displayedSongs.push(songsData[i]);
//             }
//             break;
//         default:
//             displayedSongs = songsData;
//     }

//     return (
//         <>
//             <Navbar />
//             <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
//                 <img className='w-48 rounded' src={albumData.image} alt={albumData.name} />
//                 <div className='flex flex-col'>
//                     <p>Playlist</p>
//                     <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
//                     <h4>{albumData.desc}</h4>
//                     <p className='mt-1'>
//                         <img className='inline-block w-5' src={assets.spotify_logo} alt="Spotify Logo" />
//                         <b>Soundscape</b> 1,323,154 likes <b> 50 songs, </b> about 2hr 30min
//                     </p>
//                 </div>
//             </div>

//             <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
//                 <p><b className='mr-4'></b>Title</p>
//                 <p>Album</p>
//                 <p className='hidden sm:block'>Date Added</p>
//                 <img className='m-auto w-4' src={assets.clock_icon} alt="Clock Icon" />
//             </div>
//             <hr />

//             {displayedSongs.map((item, index) => (
//                 <div onClick={() => playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
//                     <p className='text-white'>
//                         <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
//                         <img className='inline w-10 mr-5' src={item.image} alt={item.name} />
//                         {item.name}
//                     </p>
//                     <p className='text-[15px]'>{albumData.name}</p>
//                     <p className='text-[15px] hidden sm:block'>5 days ago</p>
//                     <p className='text-[15px] text-center'>{item.duration}</p>
//                 </div>
//             ))}
//         </>
//     );
// };

// export default DisplayAlbum;

import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const{id} = useParams();
    const albumData=albumsData[id];
    const{playWithId} = useContext(PlayerContext)
    

  return (
    <>
      <Navbar/>
      <div className='mt-1 flex gap-8 flex-col md:flex-row md:items-end'>
         <img className='w-48 rounded' src={albumData.image} alt=""/>
         <div className='flex flex-col'>
             <p>Playlist</p>
             <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
             <h4>{albumData.desc}</h4>
             <p className='mt-1'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt=""/>
                <b>Spotify</b>
                * 1,323,154 likes
                *<b>50 Songs, </b>
                 about 2 hr 30 min
             </p>
         </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
         <p><b className='mr-4'>#</b>Title</p>
         <p>Album</p>
         <p className='hidden sm:block'>Date Added</p>
         <img className='m-auto w-4' src={assets.clock_icon} alt=""/>
      </div>
      <hr/>
      {
        songsData.map((item,index)=>(
           <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
              <p className='text-white'>
                  <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                  <img className='inline w-10 mr-5' src={item.image} alt=""/>
                  {item.name}
              </p>
              <p className='text-[15px]'>{albumData.name}</p>
              <p className='text-[15px] hidden sm:block'>5 days ago</p>
              <p className='text-[15px] text-center'>{item.duration}</p>
           </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum