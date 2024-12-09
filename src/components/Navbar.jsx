import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className='flex space-x-8 pl-18 border items-center py-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] xl:py-3'>

    <img src="./src/assets/movie_logo.svg" alt="Logo" className='w-[3.1rem ]  h-[3.1rem] xl:w-20  xl:h-20' />
    <Link to="/movie" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradientText font-bold text-3xl xl:text-4xl">Movies</Link>
    <Link to='/favourites'className="bg-gradient-to-r from-green-400 via-lightgreen-500 to-blue-500 bg-clip-text text-transparent animate-gradientText font-bold text-3xl xl:text-4xl">Favourites</Link>

    </div>    
    </>
  )
}

export default Navbar
