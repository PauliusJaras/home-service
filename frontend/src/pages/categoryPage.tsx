import { useParams } from "react-router-dom";
import CategoryList from "../components/categoryList";
import ServiceList from "../components/serviceList";

export default function CategoryPage() {
  const { category } = useParams<string>();

  return (
    <main>
      <div className="category-container">
        <div className="label-list">
          <h5>Categories</h5>
          <CategoryList />
        </div>
        <div>
          <ServiceList filter={category} />
        </div>
      </div>
    </main>
  );
}
