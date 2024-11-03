// import React from 'react'
// import {assets} from '../assets/assets'
// import { useNavigate } from 'react-router-dom'


// const Sidebar = () => {
//   const navigate=useNavigate();
//   return (
//     <div className=' w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
//       <div className='bg-[#151515] h-[20%] rounded flex flex-col justify-end '>
//       <img className='h-[11rem] w-[10rem] flex justify-between pt-3 pb-3 pl-3 rounded-full' src={assets.logo5_icon} />
//       <img className='items-end flex justify-end h-5 w-44 px-4 py-2 grid-rows-2' src={assets.logo2_icon}/>



//       </div>
//       <div className='bg-[#121212] h-[70%] rounded mt-[10rem]'>
//         <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-4 pr-10 pt-5 cursor-pointer'>
//            <img className='w-6' src={assets.home_icon} />       
//            <p className='font-bold'>Home</p>
//         </div>
//         <div className='gap-5 p-4 flex items-center justify-between'>


//           <div className='flex items-center gap-3'>
//             <img className='w-8' src={assets.stack_icon} />
//             <p className='font-semibold'>Your Library</p>
//           </div>
//           <div className='flex items-center gap-3'>
//             <img className='w-5' src={assets.arrow_icon} />
//             <img className='w-5' src={assets.plus_icon} />
//           </div>
//         </div>
//         <div className='bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 h-40 pt-2 pb-2 '>
//            <h1 className='font-bold pt-5'>Create your first playlist. </h1>
//            <p className='font-semibold'>It's easy , we'll help you!</p>
//            <button className='px-4 py-1.5 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Create Playlist</button>
//         </div>

//         <div className='gap-5 items-center grid grid-cols-2 p-5 justify-between'>
//         <button className='w-60 gap-2 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Recommendations</button>
//         <button className='w-60 gap-2 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>New Releases</button>
//         <button className='w-60 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Radio</button>
//         <button className='w-60 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Feed</button> 
//         </div>

//         <div className='gap-5 items-center grid grid-rows-3 justify-evenly'>
//         <button className='w-60 gap-2 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Bollywood Hits</button>
//         <button className='w-60 gap-2 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Hollywood Hits</button>
//         <button className='w-60 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Old Hits</button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Sidebar

import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>


      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
      <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-4 cursor-pointer mt-4'>
            <img className='w-8' src={assets.home_icon} alt="" />
            <p className='font-bold'>Home</p>
          </div>
        <div className='p-4 flex items-center justify-between'>
         
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt="" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt="" />
            <img className='w-5' src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-bold text-[20px] flex flex-col items-start justify-start gap-1 pl-4'>
          <h1>Create Your Own Playlist</h1>
          <p className='font-semibold text-[16px]'>It's easy, we will help you!</p>
          <button onClick={() => (navigate('/playlist'))} className=' bg-purple-900 h-10 w-48 pb-1 pt-1 text-[18px] font-medium text-white rounded-full mt-2'>Create Playlist</button>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar