import Carousel from "../components/Carousel";

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
    </div>
  );
};

export default Main;
