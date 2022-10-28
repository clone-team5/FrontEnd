import icons from "./icons";
import { useState } from "react";

const Carousel = ({ pictures }: { pictures: [] }) => {
  const [selected, setSelected] = useState(0);
  const handleChangeLeft = () => {};
  const handleChangeRight = () => {};
  return (
    <div className="relative">
      {[1, 2, 3, 4].map((e) => (
        <div className="absolute">
          <img src="https://picsum.photos/600/300" />
        </div>
      ))}

      <div className="absolute">
        <icons.LeftChevron onClick={handleChangeLeft} />
        <icons.RightChevron onClick={handleChangeRight} />
      </div>
    </div>
  );
};

export default Carousel;
