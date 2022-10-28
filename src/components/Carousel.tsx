import icons from "./icons";
import { useState, useEffect } from "react";
import { cls, cycler } from "../utils";

const Carousel = ({ pictures }: { pictures: string[] }) => {
  const [selected, setSelected] = useState(0);
  const pictureCycler = cycler(pictures.length);
  const handleChangeLeft = () => {
    setSelected((cur) => pictureCycler(cur - 1));
  };
  const handleChangeRight = () => {
    setSelected((cur) => pictureCycler(cur + 1));
  };
  return (
    <div className="relative w-[600px] h-[200px]">
      {pictures.map((e, i) => (
        <div
          className={cls(
            "absolute w-full h-full transition-colors",
            e,
            i === selected ? "opacity-100" : "opacity-0"
          )}
        >
          <div className={e} />
        </div>
      ))}

      <div className="absolute w-full flex justify-between top-32">
        <icons.LeftChevron
          className="text-white active:top-1 relative"
          onClick={handleChangeLeft}
        />
        <icons.RightChevron
          className="text-white active:top-1 relative"
          onClick={handleChangeRight}
        />
      </div>
    </div>
  );
};

export default Carousel;
