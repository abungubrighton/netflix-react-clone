import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import './Banner.css';

const Banner = () => {
    const [movie,setMovies] = useState([]);
    // when the component loads , fetch movies and pick a random movie
    useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // random number between 0 and length of list of movies
        const randomIndex = Math.floor(Math.random() * request.data.results.length - 1); 
        const randomMovie  = request.data.results[randomIndex];
        setMovies(randomMovie);
    };
    fetchData();
    }, [])

    // tranccate
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "...":str;
    }
  return (
    <header 
    className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center"
    }}
    > 
        {/* with background image */}
        <div className="banner__contents">

            {/* Title */}
            <h1 className='banner__title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            {/* div > 2 buttons */}
            <div className="banner__buttons">
                <button className="banner_button">
                    Play
                </button>
                <button className="banner_button">
                    My list
                </button>
            </div>
            {/* description */}
            <div className="banner__description">
                {truncate(movie?.overview,150)}
            </div>
        </div>
    </header>
  )
}

export default Banner