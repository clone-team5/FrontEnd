const ItemCard = () => {
  return (
    <div className="w-72 flex-1 my-5 px-3">
      <div className="w-full h-auto">
        <div className="h-[282px] bg-orange-200 relative rounded-xl">
          <img
            className="absolute "
            src="https://kream-phinf.pstatic.net/MjAyMjEwMjhfODgg/MDAxNjY2OTI1NDk5NzQz.QcnMiQ5-oS4nmIUgZ_fOntY7mH_EW5X5qN9prw1ktyIg.QcYJwAauPrOETxbcUT5aBlAfcNiJ_4M1E74towQlD8sg.PNG/a_879d30d9d24a429cac07d91ec6dddbb5.png?type=m_webp"
            alt=""
          />
          <a
            className="top-2 right-2 absolute w-8 h-8 flex justify-center items-center text-gray-800"
            href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          </a>
        </div>
        <div className="pt-[9px] text-gray-800">
          <div className="leading-3 text-sm pb-0.5 border-b border-b-black inline-block font-bold">
            Asics
          </div>
          <div className="text-sm mt-[8.5px] mb-0.5">
            Asics x Jessica Gonsalves Gel-Nimbus 9 Cream White
          </div>
          <div className="text-[11px] relative before:top-[4px] before:left-[3.5px] before:content-[''] before:absolute before:block before:h-[15px] before:w-[11px] before:bg-[url(https://kream.co.kr/_nuxt/img/ico-express.8dac9dc.svg)] text-green-400 py-[4.5px] pr-[5.5px] pl-[17px] inline-block">
            빠른배송
          </div>
          <div className="pt-[7px]">
            <div className="text-[15px] font-bold">205,000원</div>
            <div className="text-[11px] text-gray-400">즉시 구매가</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
