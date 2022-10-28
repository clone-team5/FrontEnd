import Carousel from "../components/Carousel";
import Header from "../layout/Header";
import BrandFocus from "../components/BrandFocus";

const Main = () => {
  return (
    <div>
      <Carousel
        pictures={[
          "bg-slate-900",
          "bg-slate-700",
          "bg-slate-500",
          "bg-slate-300",
        ]}
      />
      {/* <BrandFocus /> */}
    </div>
  );
};

export default Main;
