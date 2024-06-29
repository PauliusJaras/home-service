import { Link } from "react-router-dom";
import { routes } from "../router/routes";
import PropTypes from "prop-types";

export default function ServiceCard({ data }) {
  const { imgUrl, imgAlt, label, title, provider, address, link } = data || {};
  return (
    <div className="service-card">
      <img src={imgUrl || "/cleaning.jpg"} alt={imgAlt || "cleaning lady"} />
      <div>
        <p className="category-label">{label || "Cleaning"}</p>
        <h5>{title || "House cleaning"}</h5>
        <p className="service-provider">{provider || "Provider Name"}</p>
        <p className="service-address">{address || "Provider Address"}</p>
        <Link
          to={routes.search + (link || "/cleaning")}
          className="main-button"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  data: PropTypes.object,
};
