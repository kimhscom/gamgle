import SearchBar from "./components/SearchBar";
import { api } from "./api/movieAPI";

export default class App {
  constructor($target) {
    console.log("App is created!");

    const searchBar = new SearchBar({ $target });

    api.searchMovies("배트맨");
  }
}
