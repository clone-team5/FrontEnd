import ItemCard from "./ItemCard";

const Showwindow = () => {
  return (
    <>
      <div className="w-[1280px] px-10 mx-auto">
        <div className="text-xl font-bold">Just Droped</div>
        <div className="text-gray-400">발매상품</div>
      </div>
      <div className="w-[1280px] px-7 mx-auto flex">
        {[1, 2, 3, 4].map((e) => (
          <ItemCard />
        ))}
      </div>
    </>
  );
};

export default Showwindow;
