// import React from 'react'

// import { assets } from '../assets/assets'
// import { useContext } from 'react'
// import { PlayerContext } from '../context/PlayerContext'

// const Player = () => {

//   const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext);


//   return (
//     <div className='h-3 flex justify-between items-center text-white px-4 py-4'>

//       <div className='flex flex-col items-center'>

//         <div className='flex items-center justify-center gap-2 mb-[8rem]'>
//           <img className='w-[10rem] h-[10rem]' src={track.image} />
//           <div className='mb-[7rem]'>
//             <p className='text-white font-bold '>{track.name}</p>
//             <p className='text-white '>{track.desc}</p>
//           </div>
//         </div>
//         <div className=''>
//           <div className='flex items-center justify-center gap-5 pt-5 mb-[2rem]'>
//             <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} />
//             {playStatus
//               ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} />
//               : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} />
//             }
//             <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} />
//             {/* <img className='w-4 cursor-pointer' src={assets.loop_icon} /> */}
//           </div>
//           <div className='flex items-center gap-5 py-4'>
//             <p>{time.currentTime.minute}:{time.currentTime.second}</p>

//             <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[450px] bg-white rounded-full cursor-pointer '>
//               <hr ref={seekBar} className='h-1 border-none w-1 bg-purple-800 rounded-full flex items-center justify-center' />
//             </div>
//             <p>{time.totalTime.minute}:{time.totalTime.second}</p>
//           </div>
//         </div>
//       </div>
//        {/* <div className='hidden lg:flex items-center pt-20 px-5 gap-5 opacity-75 '>
//         <img className='w-5' src={assets.plays_icon} />
//         <img className='w-5' src={assets.mic_icon} />
//         <img className='w-5' src={assets.queue_icon} />
//         <img className='w-5' src={assets.speaker_icon} />
//         <img className='w-5' src={assets.volume_icon} />
//         <div className='w-20 bg-white rounded h-1'>
//           <hr className='h-1 border-none w-10 bg-purple-800 rounded-full  flex items-center' />
//         </div>
//         <img className='w-5' src={assets.mini_player_icon} />
//         <img className='w-5' src={assets.zoom_icon} />
//       </div>  */}
//      </div> 
//   )
// }

// export default Player

import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
const Player = () => {
      
  const {track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong}=useContext(PlayerContext);

return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
     <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} />
        <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0,12)}</p>
        </div>
     </div>  
     <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon}/>
            <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon}/>
            {playStatus 
            ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon}/>
            :<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon}/>
          }
            
           
            <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon}/>
            <img className='w-4 cursor-pointer' src={assets.loop_icon}/>
        </div>
        <div className='flex items-center gap-5'>
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div onClick={seekSong} ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
             <hr ref={seekBar}className='h-1 border-none w-0 bg-green-800 rounded-full'/>
            
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
     </div>
     <div className='hidden lg:flex items-center gap-2 opacity-75'>
     <img className='w-4' src={assets.plays_icon}/>     
     <img className='w-4' src={assets.mic_icon}/>     
     <img className='w-4' src={assets.queue_icon}/>     
     <img className='w-4' src={assets.speaker_icon}/>     
     <img className='w-4' src={assets.volume_icon}/> 
     <div className='w-20 bg-slate-50 h-1 rounded'>
        </div>    
     <img className='w-4' src={assets.mini_icon}/>     
     <img className='w-4' src={assets.zoom_icon}/>     
     </div>
    </div>
  )
}

export default Player