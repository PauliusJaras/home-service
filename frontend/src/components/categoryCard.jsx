import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { routes } from "../router/routes";

export default function CategoryCard(props) {
  return (
    <Link to={routes.search + "/" + props.title} className="category-card">
      <span className="category-icon">{props.child}</span>
      <p>{props.title}</p>
    </Link>
  );
}

CategoryCard.propTypes = {
  title: PropTypes.string,
  child: PropTypes.element,
};
