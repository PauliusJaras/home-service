import CategoryList from "./categoryList";
import SearchBar from "./searchbar";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div>
          <h1>
            Find Home <span className="text-purple">Service/Repair</span>
            <br /> Near You
          </h1>
          <h6>Explore Best Home Service & Repair near you</h6>
        </div>
        <SearchBar />
        <CategoryList />
      </div>
    </header>
  );
}
