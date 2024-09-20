import React from 'react'
import { songsData } from '../assets/assets'
import { assets } from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={songsData[0].image} />
        <div>
        <p className='text-white'>{songsData[0].name}</p>
        <p className='text-white'>{songsData[0].desc}</p>
        <p className='text-white'>{songsData[0].duration}</p>
        <p className='text-white'>{songsData[0].file}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='w-14 flex gap-4 items-center'>
        <img className='w-4 cursor-pointer' src={assets.shuffle_icon} />
        <img className='w-4 cursor-pointer' src={assets.prev_icon} />
        <img className='w-4 cursor-pointer' src={assets.play_icon} />
        <img className='w-4 cursor-pointer' src={assets.next_icon} />
        <img className='w-4 cursor-pointer' src={assets.loop_icon} />
        </div>
        <div className='flex items-center gap-5 py-4'>
        <p>1:06</p>
          <div className='w-[60vw] max-w-[500px] bg-white rounded-full cursor-pointer'>
            <hr className='h-1 border-none w-0 bg-yellow-500 rounded-full  flex items-center'/>
          </div>
        <p>3:00</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-5' src={assets.plays_icon}/>
        <img className='w-5' src={assets.mic_icon}/>
        <img className='w-5' src={assets.queue_icon}/>
        <img className='w-5' src={assets.speaker_icon}/>
        <img className='w-5' src={assets.volume_icon}/>
        <div className='w-20 bg-white rounded h-1'>
        <hr className='h-1 border-none w-0 bg-yellow-500 rounded-full  flex items-center'/>
        </div>
        <img className='w-5' src={assets.mini_player_icon}/>
        <img className='w-5' src={assets.zoom_icon}/>
      </div>
    </div>
  )
}

export default Player
