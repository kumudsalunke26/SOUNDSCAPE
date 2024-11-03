// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const Navbar = () => {

//   const navigate = useNavigate()
//   return (
//     <>
//      <div className='w-full flex justify-between items-center font-semibold'>
//         <div className='flex items-center gap-2'>
//             <img onClick={()=>navigate(-1)} className='w-8 bg-purple-950 p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt=""/>
//             <img onClick={()=>navigate(1)} className='w-8 bg-purple-950 p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt=""/>
//         </div>
//         <div className='flex items-centercursor-pointer'>
//           <input className='w-[80rem] h-12 rounded-3xl' type='text' placeholder='Search your favourite songs'/>
//             <img className='w-9 h-9 ml-3 mt-2' src={assets.search_icon} alt=""/>

//         </div>
//         <div className='flex items-center gap-4'>

//             <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>K</p>
//         </div>
//      </div>
//      <div className='flex items-center gap-2 mt-4'>
//            <p className='bg-purple-950 text-white px-4 py-1 rounded-2xl cursor-pointer'>All</p>
//            <p className='bg-purple-950 px-4 py-1 rounded-2xl cursor-pointer'>Music</p>

//      </div>
//     </>
//   )
// }

// export default Navbar

import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../context/SearchBar'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='w-full flex justify-between items-centerfont-semibold'>
        <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-1 cursor-pointer grid-rows-2'>
          <img onClick={() => navigate(-1)} className='w-8 gap-5 bg-purple-900 p-2 rounded-2xl cursor-pointer ' src={assets.arrow_left} />
          <img onClick={() => navigate(1)} className='w-8 gap-10 bg-purple-900 p-2 rounded-2xl cursor-pointer ' src={assets.arrow_right} />
         
        </div>

<SearchBar/>
        <div className='flex items-center gap-4 '>
          
          <p className='bg-red-700 text-black rounded-full mt-2 flex items-center justify-center h-12 w-14'>KS</p>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className=' px-4 py-1 rounded-2xl cursor-pointer bg-purple-900'>Music</p>

      </div>
    </>
  )
}

export default Navbar