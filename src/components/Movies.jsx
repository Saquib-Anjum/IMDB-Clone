import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import { Oval } from "react-loader-spinner";
function Movies() {
  const [movies, setMovies] = useState([]);
//pagination
const [PageNumber,setPageNumber] = useState(1);
//set favourite movie in state 
const [favourite,setFavourite] = useState([])
//hover
//for the over of movie card to 
const [hover,setHover] = useState();

  function goAhad(){
    setPageNumber(PageNumber+1)
  }
  function goPrevious(){
    if(PageNumber>1){
    setPageNumber(PageNumber-1)
  }
  }

  useEffect(function () {
    fetchPopularMovies();
  });
// fetching API
const API_KEY = import.meta.env.VITE_API_KEY;

  const BASE_URL = "https://api.themoviedb.org/3";

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
          language: "en-US",
          page: PageNumber,
        },
      });
      console.log(response.data.results);
      setMovies(response.data.results);

      let oldFav = localStorage.getItem('imdb')||[]
      oldFav= JSON.parse(oldFav);
      setFavourite([...oldFav])
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function add(movie){
 let newArray= [...favourite,movie];
 setFavourite([...newArray])
 console.log(newArray)
 localStorage.setItem('imdb' , JSON.stringify(newArray));
  }
  function del(movie) {
    // Filter out the movie to be deleted
    let newArray = favourite.filter((m) => m.id !== movie.id);
  
    // Update the state and local storage
    setFavourite(newArray);
    localStorage.setItem("imdb", JSON.stringify(newArray));
  }
  
  

  return (
    <>
      <div className="mb-8 ">
        <div className="mt-8 font-bold text-2xl text-center">
          Trending Movies
        </div>

        {movies.length == 0 ? (
          <div className="flex justify-center m-12">
            <Oval
              height={80}
              width={80}
              color="grey"
              ariaLabel="loading"
              visible={true} // Ensure the loader is visibl
            />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {/* movies card */}
            {
            movies.map((movie)=>(
              <div
              className="h-[300px] w-[260px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110
            ease-out durtion-200 relative " onMouseEnter={()=>{setHover(movie.id)
              console.log(hover)
            }}

            onMouseLeave={()=>{
              setHover(" ")
            }}
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path
              })` }}
            >
              {hover===movie.id && <>
              {!favourite.find((m) =>m.id==movie.id)?<div className="absolute top-2 right-2  bg-grey-800 rounded-xl text-xl cursor-pointer" onClick={()=>{add(movie)}}>😍</div>:<div className="absolute top-2 right-2  bg-grey-800 rounded-xl text-xl cursor-pointer" onClick={()=>{del(movie)}}>❌</div>}
                

                

              </>}
              <div className="w-full bg-gray-900 text-white text-center py-2 rounded-b-xl">
                {movie.title}
              </div>
            </div>
            ))
            }
          </div>
        )}
      </div>
      <Pagination pageProp={PageNumber} goAhad={goAhad} goPrevious={goPrevious} />
    </>
  );
}

export default Movies;
