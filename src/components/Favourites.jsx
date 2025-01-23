import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
function Favourites() {
  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  const [currGenres, setCurrGenres] = useState("All Genres");
  //set favourite in the state from the localstorage
  const [favourite, setFavourite] = useState([]);
  useEffect(() => {
    let oldFav = localStorage.getItem("imdb")
    oldFav = oldFav ? JSON.parse(oldFav) : [];
    setFavourite([...oldFav]);
  }, []);
  // for the genres ->crime Action etc
  const [genres, setGenres] = useState();
  useEffect(() => {
    let temp = favourite.map((movie) => genreMap[movie.genre_ids[0]]);
    temp = new Set(temp);
    setGenres(["All Genres", ...temp]);

    
  }, [favourite]);

  function del(movie) {
    // Filter out the movie to be deleted
    let newArray = favourite.filter((m) => m.id !== movie.id);

    // Update the state and local storage
    setFavourite(newArray);
    localStorage.setItem("imdb", JSON.stringify(newArray));
  }
  let filteredMovie = [];
  if (currGenres === "All Genres") {
    filteredMovie = favourite;
  } else {
    filteredMovie = favourite.filter(
      (movie) => genreMap[movie.genre_ids[0]] === currGenres
    );
  }
  //state for rating
  let [rating,setRating] = useState(0);
  let [popularity,setPopularity] = useState(0);
  if(rating==1){
    filteredMovie=filteredMovie.sort(function(objA,objB){
      return objA.vote_average-objB.vote_average
    })
  }
  else if(rating==-1){
    filteredMovie=filteredMovie.sort(function(objA,objB){
      return objB.vote_average-objA.vote_average
    })
  }

  if(popularity==1){
    filteredMovie=filteredMovie.sort(function(objA,objB){
      return objA.popularity-objB.popularity
    })
  }
  else if(popularity==-1){
    filteredMovie=filteredMovie.sort(function(objA,objB){
      return objB.popularity-objA.popularity
    })
  }
  //state for the search
  const [search,setSearch] =useState("")
  filteredMovie=filteredMovie.filter((movie)=>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )
  //pagination
  const [rows,setRows]=useState(5);
  const [currPage,setCurrPage] = useState(1);
  let maxPage = Math.ceil(filteredMovie.length/rows);
  let si = (currPage-1)*rows;
  let ei =Number(si)+Number(rows)
  filteredMovie=filteredMovie.slice(si,ei)
  let goPrevious=()=>{
    if(currPage>1){
      setCurrPage(currPage-1)
    }
  }
  let goAhed=()=>{
    if(currPage<maxPage){
      setCurrPage(currPage+1)
    }
  }
  return (
    <>
      {favourite.length === 0 ? (
        <div className="flex mt-10 justify-center ">
          <div className="xl:h-[70vh] xl:w-[70vw]  justify-center items-center">
           
            
<img src="movie.svg" alt="" className=" h-60 w-60"/>

          </div>
        </div>
      ) : (
       <>     <div className='overflow-hidden'>
       <div className="flex justify-center flex-wrap mt-5 gap-5 ">
         {genres &&
           genres.map((genre) => (
             <button
               key={genre} // Add a unique key for each button
               type="button"
               className={
                 currGenres === genre
                   ? "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl ring-4 outline-none ring-green-200 dark:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-green-400"
                   : "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
               }
               onClick={() => {
                 setCurrPage(1)
                 setCurrGenres(genre)
               }
                
               }
                // Update genre on button click
             >
               {genre}
             </button>
           ))}
       </div>

       <div className="justify-center flex gap-5 mt-5 ">
         <input
           type="text" value={search} onChange={(e)=>{
             setSearch(e.target.value)
           }}
           placeholder="Search"
           className="border border-3 text-center"
         />
         <input
           type="Number" value={rows} onChange={(e)=>{
             setRows(e.target.value)
           }}
           placeholder="Page No"
           className="border border-3 text-center"
         />
       </div>
       {/* table */}

       <section className="container mx-auto p-6 font-mono">
         <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
           <div className="w-full overflow-x-auto">
             <table className="w-full">
               <thead>
                 <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                   <th className=" px-4 py-3 ">Name</th>
                   <th className="flex px-1 py-3 gap-2 justify-center items-center">
                     <div className="cursor-pointer" onClick={()=>{
                       setRating(-1)
                       setPopularity(0)
                     }}>
                       <svg
                         className="w-4 h-4 text-gray-800 dark:text-grey"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 14 8"
                       >
                         <path
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                         />
                       </svg>
                     </div>
                     Rating
                     <div className="cursor-pointer" onClick={()=>{
                       setRating(1)
                       setPopularity(0)
                     }}>
                       <svg
                         className="w-4 h-4 text-gray-800 dark:text-grey"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 14 8"
                       >
                         <path
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                         />
                       </svg>
                     </div>
                   </th>
                   <th className="px-4 py-3"><div className="flex justify-center items-center gap-2"><div className="cursor-pointer" onClick={()=>{
                       setPopularity(-1)
                       setRating(0);
                   }}>
                       <svg
                         className="w-4 h-4 text-gray-800 dark:text-grey"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 14 8"
                       >
                         <path
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                         />
                       </svg>
                     </div>
                     Popularity
                     <div className="cursor-pointer" onClick={()=>{
                       setPopularity(1)
                       setRating(0)
                   }}>
                       <svg
                         className="w-4 h-4 text-gray-800 dark:text-grey"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 14 8"
                       >
                         <path
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                         />
                       </svg>
                     </div></div></th>
                   <th className="px-4 py-3">Genre</th>
                   <th className="px-4 py-3">Remove</th>
                 </tr>
               </thead>
               <tbody className="bg-white">
                 {filteredMovie.map((movie) => (
                   <tr key={movie.id} className="text-gray-700">
                     <td className="px-4 py-3 border">
                       <div className="flex items-center text-sm">
                         <div className="relative w-40 h-20 mr-3">
                           <img
                             className="object-cover w-full h-full"
                             src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                             alt={movie.title}
                             loading="lazy"
                           />
                         </div>
                         <div>
                           <p className="font-semibold text-black">
                             {movie.title}
                           </p>
                         </div>
                       </div>
                     </td>
                     <td className="px-4 py-3 text-ms font-semibold border">
                       {movie.vote_average}
                     </td>
                     <td className="px-4 py-3 text-ms font-semibold border">
                       {movie.popularity}
                     </td>
                     <td className="px-4 py-3 text-xs border">
                       <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                         {genreMap[movie.genre_ids[0]]}
                       </span>
                     </td>
                     <td className="px-4 py-3 text-sm border">
                       <button
                         className="text-red-500 "
                         onClick={() => del(movie)}
                       >
                         Delete
                       </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       </section>
       <div className="mt-5">
         <Pagination pageProp={currPage}goAhad={goAhed} goPrevious={goPrevious}></Pagination>
       </div>
     </div></>
      )}
      ;
    </>
  );
}

export default Favourites;
