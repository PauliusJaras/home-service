import { Link, generatePath } from "react-router-dom";
import { ReactNode } from "react";
import { routes } from "../router/routes";

interface ICategoryCard {
  title: string;
  child: ReactNode;
}

export default function CategoryCard(props: ICategoryCard) {
  const categoryPath = generatePath(routes.search_category, {
    category: props.title || "Cleaning",
  });

  return (
    <Link to={categoryPath} className="category-card">
      <span className="category-icon">{props.child}</span>
      <p>{props.title}</p>
    </Link>
  );
}
