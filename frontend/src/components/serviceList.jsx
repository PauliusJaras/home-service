import { data } from "../data/cardData";
import ServiceCard from "./serviceCard";

export default function ServiceList() {
  const cardData = data;

  return (
    <div>
      <h4>Popular Business</h4>
      <div className="service-list">
        {cardData.map((data, index) => {
          return <ServiceCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
}
