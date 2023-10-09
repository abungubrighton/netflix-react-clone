import React, { useEffect, useState } from 'react'
import  axios from '../axios';

const Row = ({title, fetchUrl}) => {
    const [movies,setMovies] = useState([]);

    // runs based on a condition(commponent mounts/ loads) or variable change
    useEffect(() => {
        async function fetchData () {
            const request =  await axios.get(fetchUrl);
            console.log("Fetching data", request);
            
        }

        fetchData ();

    }, []);

  return (
    <div>
        {/* title */}
        <h2>{title}</h2>
        {/* container with all posters images */}
    </div>
  )
}

export default Row