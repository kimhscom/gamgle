export default class SearchBar {
  constructor($target, onSearch) {
    this.section = document.createElement("section");
    this.section.className = "searching-section";

    $target.appendChild(this.section);

    this.onSearch = onSearch;

    this.render();
  }

  render() {
    this.section.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const searchBox = document.createElement("input");
    searchBox.className = "search-box";
    searchBox.placeholder = "영화를 검색하세요.";

    const searchButton = document.createElement("button");
    searchButton.className = "search-button";
    searchButton.innerText = "영화 검색";

    searchBox.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.onSearch(searchBox.value);
      }
    });

    searchButton.addEventListener("click", () => {
      this.onSearch(searchBox.value);
    });

    wrapper.appendChild(searchBox);
    wrapper.appendChild(searchButton);
    this.section.appendChild(wrapper);
  }
}
