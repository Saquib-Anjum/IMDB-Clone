import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='flex space-x-8 pl-18 border items-center py-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] xl:py-3'>

    <div className='w-[3.1rem] h-[3.1rem] xl:w-20 xl:h-20 flex items-center '>
      
     </div>
    {/* <img src="./src/assets/movie_logo.svg" alt="Logo" className='w-[3.1rem ]  h-[3.1rem] xl:w-20  xl:h-20' /> 
    <div className='w-[3.1rem ]  h-[3.1rem] xl:w-20  xl:h-20'>
    
    
    */}
<div className="text-blue-500 text-xxl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-device-tv">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8.707 2.293l3.293 3.292l3.293 -3.292a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-2.293 2.293h4.586a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h4.585l-2.292 -2.293a1 1 0 0 1 1.414 -1.414" />
  </svg>
</div>

      
    <Link to="/movie" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradientText font-bold text-3xl xl:text-4xl">Movies</Link>
    <Link to='/favourites'className="bg-gradient-to-r from-green-400 via-lightgreen-500 to-blue-500 bg-clip-text text-transparent animate-gradientText font-bold text-3xl xl:text-4xl">Favourites</Link>

    </div>    
    </>
  )
}

export default Navbar
