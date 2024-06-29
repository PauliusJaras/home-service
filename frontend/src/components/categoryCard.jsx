import PropTypes from "prop-types";
import { Link, generatePath } from "react-router-dom";
import { routes } from "../router/routes";

export default function CategoryCard(props) {
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

CategoryCard.propTypes = {
  title: PropTypes.string,
  child: PropTypes.element,
};
