import Carousel from "../components/Carousel";
import Header from "../layout/Header";
import BrandFocus from "../components/BrandFocus";

const Main = () => {
  return (
    <>
      <Header />
      <div>
        <Carousel pictures={[]} />
      </div>
    </>
  );
};

export default Main;
