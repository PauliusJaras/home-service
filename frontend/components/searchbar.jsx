import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="search-container">
      <input className="search-input" type="text" placeholder="Search" />
      <button className="search-button">
        <CiSearch />
      </button>
    </div>
  );
}
