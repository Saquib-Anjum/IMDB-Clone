import React, { useEffect, useState } from "react";
import axios from "axios";

function Banner() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "1febc1b364daf26d9126ee67ce8ae3c9";
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
          },
        });
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPopularMovies();
  }, []); // Dependency array ensures this runs only once when the component mounts.
let randomNumber = Math.floor(Math.random() * 10)+1
  if (loading || movies.length === 0) {
    return (
      <div className="h-[70vh] bg-gray-800 flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div
      className="h-[500px] w-[100vw] bg-center bg-cover flex items-end justify-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[randomNumber]?.backdrop_path})`,
      }}
    >
      <div className="text-3xl text-white p-4 bg-gray-900 w-full flex justify-center opacity-75">
        {movies[randomNumber]?.title || "No Title Available"}
      </div>
    </div>
  );
}

export default Banner;
