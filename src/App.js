import SearchBar from "./components/SearchBar";

export default class App {
  constructor($target) {
    console.log("App is created!");

    const searchBar = new SearchBar({ $target });
  }
}
