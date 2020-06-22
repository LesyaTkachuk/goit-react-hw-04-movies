const myKey = "0200a72705dd228112e788fd0e4d6d6c";
const baseUrl = "https://api.themoviedb.org/3/";

function fetchTrendingMovies() {
  return fetch(`${baseUrl}trending/all/day?api_key=${myKey}`)
    .then((resp) => resp.json())
    .then((data) => data.results);
}

function fetchMoviesWithQuery(queryString) {
  return fetch(
    `${baseUrl}search/movie?api_key=${myKey}&query=${queryString}&language=en-US&page=1&include_adult=false`
  )
    .then((resp) => resp.json())
    .then((data) => data.results);
}

function fetchMovieDetails(movieId) {
  return fetch(
    `${baseUrl}movie/${movieId}?api_key=${myKey}&language=en-US`
  ).then((resp) => resp.json());
}

function fetchMovieCast(movieId) {
  return fetch(`${baseUrl}movie/${movieId}/credits?api_key=${myKey}`)
    .then((resp) => resp.json())
    .then((data) => data.cast);
}

function fetchMovieReviews(movieId) {
  return fetch(
    `${baseUrl}movie/${movieId}/reviews?api_key=${myKey}&language=en-US&page=1`
  ).then((resp) => resp.json());
}

export default {
  fetchTrendingMovies,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};
