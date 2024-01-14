import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ searchNote }) => {
  const [searchData, setSearchData] = useState({
    noteSearch: "",
  });

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
    searchNote(searchData.noteSearch);
  }, [searchData]);

  return (
    <header>
      <div className="logo">
        <p>Notes</p>
      </div>

      <div className="search">
        <div>
          <FontAwesomeIcon icon="fas fa-magnifying-glass" />
        </div>
        <input
          type="search"
          name="noteSearch"
          placeholder="Search note"
          onChange={handleChange}
          value={searchData.noteSearch}
        />
      </div>
    </header>
  );
};

export default Header;
