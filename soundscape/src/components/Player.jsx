import React from 'react'
import { songsData } from '../assets/assets'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

  const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong} = useContext(PlayerContext);


  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} />
        <div>
          <p className='text-white font-bold'>{track.name}</p>
          <p className='text-white'>{track.desc}</p>
          <p className='text-white'>{track.duration}</p>
          <p className='text-white'>{track.file}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='w-14 flex gap-4 items-center'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} />
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} />
          {playStatus
            ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} />
            : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} />
          }

          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} />
        </div>
        <div className='flex items-center gap-5 py-4'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>

          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-white rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-1 bg-purple-800 rounded-full  flex items-center' />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-5' src={assets.plays_icon} />
        <img className='w-5' src={assets.mic_icon} />
        <img className='w-5' src={assets.queue_icon} />
        <img className='w-5' src={assets.speaker_icon} />
        <img className='w-5' src={assets.volume_icon} />
        <div className='w-20 bg-white rounded h-1'>
          <hr className='h-1 border-none w-10 bg-purple-800 rounded-full  flex items-center' />
        </div>
        <img className='w-5' src={assets.mini_player_icon} />
        <img className='w-5' src={assets.zoom_icon} />
      </div>
    </div>
  )
}

export default Player