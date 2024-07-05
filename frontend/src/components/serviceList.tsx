import { data } from "../data/cardData";
import { ICardData } from "../data/CardData.types";
import ServiceCard from "./serviceCard";
import { IServiceListProps } from "./types/ServiceList.Types";

export default function ServiceList({ filter }: IServiceListProps) {
  const cardData: ICardData[] = data;

  return (
    <div>
      <h4>Popular Business</h4>
      <div className="service-list">
        {cardData.map((data: ICardData, index) => {
          if (filter == null) {
            return <ServiceCard key={data?.id || index} data={data} />;
          } else {
            if (data.label == filter) {
              return <ServiceCard key={data?.id || index} data={data} />;
            }
          }
        })}
      </div>
    </div>
  );
}
