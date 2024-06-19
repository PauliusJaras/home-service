import CategoryCard from "./categoryCard";
import { GiMagicBroom } from "react-icons/gi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { LiaBrushSolid } from "react-icons/lia";
import { PiTruckFill } from "react-icons/pi";
import { PiPipeWrenchFill } from "react-icons/pi";
import { GiElectric } from "react-icons/gi";

export default function CategoryList() {
  return (
    <div className="category-list">
      <CategoryCard
        child={<GiMagicBroom color="#AA30E6" size={"3em"} />}
        title={"Cleaning"}
      ></CategoryCard>
      <CategoryCard
        child={<HiOutlineWrenchScrewdriver color="#E0C87A" size={"3em"} />}
        title={"Repair"}
      ></CategoryCard>
      <CategoryCard
        child={<LiaBrushSolid color="#469B9C" size={"3em"} />}
        title={"Painting"}
      ></CategoryCard>
      <CategoryCard
        child={<PiTruckFill color="#D44C48" size={"3em"} />}
        title={"Shifting"}
      ></CategoryCard>
      <CategoryCard
        child={<PiPipeWrenchFill color="#E4983A" size={"3em"} />}
        title={"Plumbing"}
      ></CategoryCard>
      <CategoryCard
        child={<GiElectric color="#285EBA" size={"3em"} />}
        title={"Electric"}
      ></CategoryCard>
    </div>
  );
}
