import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ search }) => {
  const [isFocused, setIsFocused] = useState(false);

  function handleClear() {
    const searchBar = document.getElementById("search-notes");

    if (!searchBar.value) {
      return;
    }

    searchBar.value = "";
  }

  function handleOnChange(e) {
    search(e.target.value);
  }

  return (
    <div className="search-bar">
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        className="search-icon"
      />
      <input
        type="text"
        name="search-notes"
        id="search-notes"
        placeholder="Search notes"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onInput={handleOnChange}
      />
      <button
        type="button"
        className="search-clear"
        onClick={handleClear}
        style={isFocused ? { opacity: 1 } : { opacity: 0 }}
      >
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </button>
    </div>
  );
};

export default SearchBar;
