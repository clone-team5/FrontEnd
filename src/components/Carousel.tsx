import icons from "./icons";
import { useState, useEffect, useCallback } from "react";
import { cls, cycler } from "../utils";
import { Picture } from "../types";

interface Props {
  pictures: Picture[];
}

const Carousel = ({ pictures }: Props) => {
  const [selected, setSelected] = useState(0);
  const pictureCycler = cycler(pictures.length);
  const handleChangeLeft = () => {
    setSelected((cur) => pictureCycler(cur - 1));
  };
  const handleChangeRight = () => {
    setSelected((cur) => pictureCycler(cur + 1));
  };

  const nextImage = useCallback(() => {
    setSelected((cur) => pictureCycler(cur + 1));
  }, []);
  useEffect(() => {
    setInterval(nextImage, 5000);
  }, []);
  return (
    <div className={"relative w-full min-h-[480px]"}>
      {pictures.map((picture, i) => (
        <img
          key={picture.urls}
          src={picture.urls}
          className={cls(
            "absolute w-full h-full duration-200 ease-linear transition-all object-contain",
            picture.color,
            i > selected ? "opacity-0" : "opacity-100 "
          )}
        />
      ))}

      <div className="absolute w-full flex justify-between top-1/2">
        <icons.LeftChevron
          className="text-white w-20 h-20 flex justify-center items-center cursor-pointer"
          onClick={handleChangeLeft}
        />
        <icons.RightChevron
          className="text-white w-20 h-20 flex justify-center items-center cursor-pointer"
          onClick={handleChangeRight}
        />
      </div>
      <ul className="absolute w-full flex justify-center gap-3 bottom-8">
        {pictures.map((picture, i) => (
          <li
            key={picture.urls}
            className={cls(
              "w-2 h-2 rounded-full duration-200 ease-linear transition-all",
              i === selected ? "bg-slate-600" : "bg-slate-200"
            )}
          />
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
