import PropTypes from "prop-types";

export default function Avatar({ name }) {
  const firstLetter = name.charAt(0).toUpperCase();

  return <div className="avatar">{firstLetter}</div>;
}

Avatar.propTypes = {
  name: PropTypes.string,
};
