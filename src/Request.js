const API_KEY = "1e667288587345ebdf20d9faf957ef13";

const requests = {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US`,
}

export default requests;