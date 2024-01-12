import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ handleSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchData, setSearchData] = useState({
    "search-notes": "",
  });

  function handleClear() {
    setSearchData({
      "search-notes": "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setSearchData((prevSearchData) => {
      return {
        ...prevSearchData,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    handleSearch(searchData["search-notes"]);
  }, [searchData]);

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
        onChange={handleChange}
        value={searchData["search-notes"]}
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
