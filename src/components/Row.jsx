import React, { useState } from 'react'
import  axios from 'axios'

const Row = ({title, fetchUrl}) => {
    const [movies,setMovies] = useState([]);

    // runs based on a condition(commponent mounts/ loads) or variable change
    useEffect(() => {
        async function fetchData () {

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