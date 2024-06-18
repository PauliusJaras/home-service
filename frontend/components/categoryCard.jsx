import PropTypes from "prop-types";

export default function CategoryCard(props) {
  return (
    <div className="category-card">
      <span className="category-icon">{props.child}</span>
      <p>{props.title}</p>
    </div>
  );
}

CategoryCard.propTypes = {
  title: PropTypes.string,
  child: PropTypes.element,
};
