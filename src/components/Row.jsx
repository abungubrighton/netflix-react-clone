import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const baseImageUrl = `https://image.tmdb.org/t/p/original`;
  // when user clicks on a poster , capture its trailer url and set it so that it can be ssen
  const [trailerUrl,setTrailerUrl] = useState("");

  // runs based on a condition(commponent mounts/ loads) or variable change
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // Add movies to state
      setMovies(request.data.results);
    }

    fetchData();
  }, [fetchUrl]);
 
  const handleOnclick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');

    } else {
      movieTrailer(movie?.name || "")
        .then(url => {
          // https://www,youtube.com/watch?v=XYZTYRNk
          console.log("MOVIE URL",url);
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get('v'))
          console.log("URL PARAMS", urlParams)
        })
      .catch(error => console.error(error));
    }
  }

  // youtube trailer options
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      {/* container with all posters images */}
      <div className="row__posters">
        {/* several posters images */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseImageUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={()=> handleOnclick(movie)}
          />
        ))}
      </div>
     {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
