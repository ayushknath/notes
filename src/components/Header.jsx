import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <p>Notes</p>
      </div>

      <div className="search">
        <div>
          <FontAwesomeIcon icon="fas fa-magnifying-glass" />
        </div>
        <input type="search" name="noteSearch" placeholder="Search note" />
      </div>
    </header>
  );
};

export default Header;
