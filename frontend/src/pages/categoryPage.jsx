import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { category } = useParams();

  return <div>Category page - {category}</div>;
}
