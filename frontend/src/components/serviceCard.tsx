import { Link, generatePath } from "react-router-dom";
import { ICardData } from "../data/CardData.types";
import { routes } from "../router/routes";

export default function ServiceCard({ data }: { data: ICardData }) {
  const { imgUrl, imgAlt, label, title, provider, address, link } = data || {};

  const categoryPath = generatePath(routes.search_category, {
    category: link || "Cleaning",
  });

  return (
    <Link to={categoryPath} className="service-card">
      <img src={imgUrl || "/cleaning.jpg"} alt={imgAlt || "cleaning lady"} />
      <div>
        <p className="category-label">{label || "Cleaning"}</p>
        <h5>{title || "House cleaning"}</h5>
        <p className="service-provider">{provider || "Provider Name"}</p>
        <p className="service-address">{address || "Provider Address"}</p>
        <Link to={categoryPath} className="main-button">
          Book Now
        </Link>
      </div>
    </Link>
  );
}
