import { useEffect, useState, ChangeEventHandler } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router";
import Portal from "../components/Portal";
import Toast from "../components/Toast";
import { LoginForm } from "../types";
import { cls, regOptEnter } from "../utils";
interface Inputs {
  id: string;
  pw: string;
}

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginForm>({ mode: "onChange" });
  const onValid = async (data: FieldValues) => {
    console.log("inputs : ", data);
    // const res = await (await fetch("url")).json();
    // console.log(res);
    reset();
  };
  const handleClickSingup = () => {
    navigate("/signup");
  };
  return (
    <div className="w-[1200px] mx-auto px-10">
      <form
        className="w-[400px] h-[756px] mx-auto pt-[60px] pb-40"
        onSubmit={handleSubmit(onValid)}
      >
        <div className="h-full">
          <h2 className="text-center pb-[50px] before:w-[250px] before:h-[56px] before:content-[''] before:bg-[length:250px_56px] before:inline-block before:bg-[url(https://kream.co.kr/_nuxt/img/login_title.9f9ccc8.png)]">
            <span className="w-[1px] h-[1px] overflow-hidden absolute ">
              KREAM
            </span>
          </h2>
          <div className="pt-[10px] pb-[14px] h-20">
            <h3
              className={cls(
                "text-[13px] transition-colors",
                errors.email ? "text-red-500" : "text-gray-800"
              )}
            >
              이메일 주소
            </h3>
            <input
              {...register(...regOptEnter.email())}
              type="email"
              className={cls(
                "w-full pr-[30px] transition-all pl-0 border-b  border-0 outline-none focus:border-b focus:outline-none border-transparent focus:border-transparent focus:ring-0 placeholder:text-gray-200 focus:placeholder:text-transparent",
                errors.email
                  ? "focus:border-b-red-500 border-b-red-500"
                  : "focus:border-b-gray-800 border-b-gray-200"
              )}
              placeholder="예) kream@kream.co.kr"
            />
            <p className="text-[11px] leading-4 transition-colors text-red-500 block w-auto h-auto">
              {errors.email?.message as string}
            </p>
          </div>
          <div className="pt-[10px] pb-[14px] h-20">
            <h3
              className={cls(
                "text-[13px] transition-colors",
                errors.password ? "text-red-500" : "text-gray-800"
              )}
            >
              비밀번호
            </h3>
            <input
              {...register(...regOptEnter.password())}
              type="password"
              className={cls(
                "w-full pr-[30px] transition-all pl-0 border-b border-b-gray-200 border-0 outline-none focus:border-b focus:border-b-gray-800 focus:outline-none border-transparent focus:border-transparent focus:ring-0",
                errors.password
                  ? "focus:border-b-red-500 border-b-red-500"
                  : "focus:border-b-gray-800 border-b-gray-200"
              )}
            />
            <p className="text-[11px] leading-4 transition-colors text-red-500 block w-auto h-auto">
              {errors.password?.message as string}
            </p>
          </div>
          <div className="h-[72px] pt-5 ">
            <button
              className={cls(
                "block w-full text-white h-full rounded-xl font-semibold",
                isValid ? "bg-gray-900" : "bg-gray-200"
              )}
            >
              로그인
            </button>
          </div>
          <ul className="mt-5 h-[17.5px] grid grid-cols-3 divide-x text-center divide-gray-300 text-[13px]">
            <li>
              <a href="">이메일 가입</a>
            </li>
            <li>
              <a href="">이메일 찾기</a>
            </li>
            <li>
              <a href="">비밀번호 찾기</a>
            </li>
          </ul>
          <div className="mt-10">
            <a className="h-[62px] mb-2 border block rounded-2xl relative font-bold flex justify-center items-center cursor-pointer text-base">
              <div className="absolute bg-slate-400 w-6 h-6 left-[15px] top-1/2 -translate-y-1/2" />
              소셜로그인
            </a>
            <a className="h-[62px] mb-2 border block rounded-2xl relative font-bold flex justify-center items-center cursor-pointer text-base">
              <div className="absolute bg-slate-400 w-6 h-6 left-[15px] top-1/2 -translate-y-1/2" />
              소셜로그인
            </a>
          </div>
        </div>
      </form>
      <Portal>
        <Toast isShow={true} message={"hihi"} />
      </Portal>
    </div>
  );
};

export default Login;
