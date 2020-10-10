const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "19936747f66378b4e717c1350ed5a425";
const API_LAG = "ko";

const api = {
  searchMovies: (term) => {
    fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&language=${API_LAG}&query=${term}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};

export { api };
