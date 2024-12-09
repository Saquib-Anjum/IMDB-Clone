import React, { useState } from 'react'

function Pagination({pageProp,goAhad,goPrevious}) {
  // let [PageNumber,setPageNumber] = useState(1);

  // function goAhad(){
  //   setPageNumber(PageNumber+1)
  // }
  // function goPrevious(){
  //   if(PageNumber>1){
  //   setPageNumber(PageNumber-1)
  // }
  // }
  return (
   
    <>
      <div className='w-full flex justify-center mb-3'>
        <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl' onClick={goPrevious} >Previous</button>

        <button className='p-2 border-2 border-indigo-500 text-indigo-500'>{pageProp}</button>

        <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl' onClick={goAhad}>Next</button>
      </div>
    </>
  )
}

export default Pagination
