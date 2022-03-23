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
    fetchAdventureMovies: {
        title: "Adventure",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchMysteryMovies: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchFamilyMovies: {
        title: "Family",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    },
    fetchThrillerMovies: {
        title: "Thriller",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    },
    fetchFantasyMovies: {
        title: "Fantasy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    },
}