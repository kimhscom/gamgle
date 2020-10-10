export default class SearchBar {
  constructor({ $target }) {
    this.section = document.createElement("section");
    this.section.className = "searching-section";

    $target.appendChild(this.section);

    this.render();
  }

  render() {
    this.section.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const searchBox = document.createElement("input");
    searchBox.className = "search-box";
    searchBox.placeholder = "Search for games.";

    const searchButton = document.createElement("button");
    searchButton.className = "search-button";
    searchButton.innerText = "Gamgle search";

    wrapper.appendChild(searchBox);
    wrapper.appendChild(searchButton);
    this.section.appendChild(wrapper);
  }
}
