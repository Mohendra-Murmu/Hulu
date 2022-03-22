/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;

export default {
    fetchToprending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discovery/movie?api_key=${API_KEY}&with_genres=35`,
    },

}