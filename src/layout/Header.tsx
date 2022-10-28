import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="w-screen h-[2.1rem] p-[8px] border-solid border-b">
        <div className="flex items-stretch flex-row justify-end">
          <div className="mr-[1rem]">고객센터</div>
          <div className="mr-[1rem]">관심상품</div>
          <div className="mr-[1rem]">마이페이지</div>
          <div className="mr-[1rem]">로그인</div>
        </div>
      </div>
      <div className="w-screen h-[4.8rem] border-solid border-b">
        <div>Kream</div>
        <div className="flex items-stretch flex-row justify-end">
          <div className="mr-[1rem] text-[15px]">STYLE</div>
          <div className="mr-[1rem] text-[15px]">SHOP</div>
          <div className="mr-[1rem] text-[15px]">ABOUT</div>
          <div className="mr-[1rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
