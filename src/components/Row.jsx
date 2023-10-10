import React, { useEffect, useState } from 'react'
import axios from '../axios';
import './Row.css';

const Row = ({ title, fetchUrl , isLargeRow}) => {
  const [movies, setMovies] = useState([]);
  const baseImageUrl = `https://image.tmdb.org/t/p/original`;

  // runs based on a condition(commponent mounts/ loads) or variable change
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log("Fetching data", request.data.results);
      // Add movies to state
      setMovies(request.data.results);

    }

    fetchData();

  }, [fetchUrl]);
  console.log("MOVIES", movies);

  return (
    <div className='row'>
      {/* title */}
      <h2>{title}</h2>
      {/* container with all posters images */}
      <div className='row__posters'>
        {/* several posters images */}
        {
          movies.map((movie) => (
            <img key={movie.id} className={`row__poster ${isLargeRow && 'row__posterLarge'}`} src={`${baseImageUrl}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          ))
        }

      </div>

    </div>
  )
}

export default Row