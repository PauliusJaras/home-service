import ServiceCard from "./serviceCard";

export default function ServiceList() {
  const data = [
    {
      imgUrl: "/cleaning.jpg",
      imgAlt: "Cleaning",
      label: "Label",
      title: "Cleaning Services",
      provider: "Name Surname",
      address: "Real address 1-2-3",
      link: "/cleaning",
    },
  ];

  return (
    <div>
      <h4>Popular Business</h4>
      <div className="service-list">
        <ServiceCard key={1} data={data[0]} />
        <ServiceCard key={2} />
        <ServiceCard key={3} />
        <ServiceCard key={4} />
        <ServiceCard key={5} />
        <ServiceCard key={6} />
        <ServiceCard key={7} />
        <ServiceCard key={8} />
      </div>
    </div>
  );
}
