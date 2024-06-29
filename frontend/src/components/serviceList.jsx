import { data } from "../data/cardData";
import ServiceCard from "./serviceCard";
import PropTypes from "prop-types";

export default function ServiceList({ filter }) {
  const cardData = data;

  return (
    <div>
      <h4>Popular Business</h4>
      <div className="service-list">
        {cardData.map((data) => {
          if (filter == null) {
            return <ServiceCard key={data.id} data={data} />;
          } else {
            if (data.label == filter) {
              return <ServiceCard key={data.id} data={data} />;
            }
          }
        })}
      </div>
    </div>
  );
}

ServiceList.propTypes = {
  filter: PropTypes.string,
};
