const APIKEY = '720a048451bd66fe38608558aa2d3963';

/*URL ENDINGS */
const requests = {
    fetchTrending: `/trending/all/week?api_keys=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv/week?api_keys=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated/?api_keys=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie/?api_keys=${APIKEY}&with_generes=28`,
    fetchComedyMovies: `/discover/movie/?api_keys=${APIKEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/movie/?api_keys=${APIKEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/movie/?api_keys=${APIKEY}&with_generes=10749`,
    fetchDocumentaries: `/discover/movie/?api_keys=${APIKEY}&with_generes=99`,
}


export default requests;