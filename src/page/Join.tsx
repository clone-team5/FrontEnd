import { useEffect, useState, ChangeEventHandler, MouseEvent } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router";
import { SetStateAction, Dispatch } from "react";
import Portal from "../components/Portal";
import Toast from "../components/Toast";
import { JoinForm } from "../types";
import { cls, regOptJoin } from "../utils";
import icons from "../components/icons";
import Checkbox from "../components/Checkbox";
interface NavStates {
  isFadeout: boolean;
  to: string;
}
interface OkStates {
  age: [boolean, boolean];
  notification: [boolean, boolean, boolean];
}
interface IsShowSub {
  age: boolean;
  notification: boolean;
}
interface Props {
  navStates: NavStates;
  setNavStates: Dispatch<SetStateAction<NavStates>>;
}

const Join = ({ navStates, setNavStates }: Props) => {
  const navigate = useNavigate();
  const [isModalShow, setIsModalShow] = useState(false);
  const [okStates, setOkStates] = useState<OkStates>({
    age: [false, false],
    notification: [false, false, false],
  });
  const [isShowSub, setIsShowSub] = useState<IsShowSub>({
    age: false,
    notification: false,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<JoinForm>({ mode: "onChange" });
  const onValid = async (data: FieldValues) => {
    console.log("inputs : ", data);
    // const res = await (await fetch("url")).json();
    // console.log(res);
    setIsModalShow(true);
    setTimeout(() => {
      setIsModalShow(false);
    }, 3000);
    reset();
  };
  const onInValid = (data: FieldValues) => {};
  const handleTransitionEnd = () => {
    navigate(navStates.to);
  };
  const handleClick = () => {
    setNavStates(() => ({ isFadeout: true, to: "/login" }));
  };
  useEffect(() => {
    setNavStates((cur) => ({ ...cur, isFadeout: false }));
  }, []);
  const handleClickPlus = (mainName: keyof IsShowSub) => () => {
    setIsShowSub((cur) => ({ ...cur, [mainName]: true }));
  };
  const handleClickMinus = (mainName: keyof IsShowSub) => () => {
    setIsShowSub((cur) => ({ ...cur, [mainName]: false }));
  };
  const handleClickMain =
    (mainName: keyof IsShowSub) => (e: MouseEvent<HTMLLabelElement>) => {
      e.preventDefault();
      console.log("click main");
      if (okStates[mainName].every((e) => e)) {
        setOkStates((cur) => ({
          ...cur,
          [mainName]: cur[mainName].map((e) => false),
        }));
      } else {
        setOkStates((cur) => ({
          ...cur,
          [mainName]: cur[mainName].map((e) => true),
        }));
      }
    };
  const handleClickSub = (mainName: keyof IsShowSub, index: number) => () => {
    const newChecks = [...okStates[mainName]];
    newChecks[index] = !newChecks[index];
    setOkStates((cur) => ({
      ...cur,
      [mainName]: newChecks,
    }));
  };
  useEffect(() => {
    console.log("okStates : ", okStates);
  }, [okStates]);
  return (
    <div
      className={cls(
        "w-[1200px] mx-auto px-10 transition-all duration-300",
        navStates.isFadeout ? "opacity-0" : "opacity-100"
      )}
      onTransitionEnd={handleTransitionEnd}
    >
      <form
        className="w-[400px] h-[756px] mx-auto pt-[60px] pb-40"
        onSubmit={handleSubmit(onValid, onInValid)}
      >
        <div className="h-full">
          <h2 className="text-center pb-[42px] text-[32px]">회원가입</h2>
          <div className="pt-[10px] pb-[14px] h-20">
            <h3
              className={cls(
                "text-[13px] transition-colors",
                errors.email ? "text-red-500" : "text-gray-800"
              )}
            >
              이메일 주소*
            </h3>
            <input
              {...register(...regOptJoin.email())}
              type="text"
              className={cls(
                "w-full pr-[30px] transition-all pl-0 border-b  border-0 outline-none focus:border-b focus:outline-none border-transparent focus:border-transparent focus:ring-0 placeholder:text-gray-300 focus:placeholder:text-transparent",
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
              비밀번호*
            </h3>
            <input
              {...register(...regOptJoin.password())}
              type="password"
              className={cls(
                "w-full pr-[30px] transition-all pl-0 border-b border-b-gray-200 border-0 outline-none focus:border-b focus:border-b-gray-800 focus:outline-none border-transparent focus:border-transparent focus:ring-0 placeholder:text-gray-300 focus:placeholder:text-transparent",
                errors.password
                  ? "focus:border-b-red-500 border-b-red-500"
                  : "focus:border-b-gray-800 border-b-gray-200"
              )}
              placeholder="영문, 숫자, 특수문자 조합 8-16자"
            />
            <p className="text-[11px] leading-4 transition-colors text-red-500 block w-auto h-auto">
              {errors.password?.message as string}
            </p>
          </div>
          <div className="pt-[10px] pb-[14px] h-20">
            <h3
              className={cls(
                "text-[13px] transition-colors",
                errors.password ? "text-red-500" : "text-gray-800"
              )}
            >
              신발 사이즈
            </h3>
            <label className="relative">
              <input
                {...register(...regOptJoin.size())}
                type="text"
                disabled
                className={cls(
                  "w-full pr-[30px] transition-all pl-0 border-b border-b-gray-200 border-0 outline-none focus:border-b focus:border-b-gray-800 focus:outline-none border-transparent focus:border-transparent focus:ring-0 placeholder:text-gray-300 focus:placeholder:text-transparent cursor-pointer",
                  errors.password
                    ? "focus:border-b-red-500 border-b-red-500"
                    : "focus:border-b-gray-800 border-b-gray-200"
                )}
                placeholder="선택하세요"
              />
              <icons.RightChevron
                className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                iconClassName="w-6 h-6"
              />
            </label>
            <p className="text-[11px] leading-4 transition-colors text-red-500 block w-auto h-auto">
              {errors.size?.message as string}
            </p>
          </div>
          <div className="pt-6 pb-10">
            {isShowSub.age ? (
              <>
                <Checkbox
                  main
                  minus
                  body="[필수] 만 14세 이상이며 모두 동의합니다."
                  onClickSecond={handleClickMinus("age")}
                />
                <div className="pt-4 pl-9">
                  {["이용약관 동의", "개인정보 수집 및 동의"].map((body, i) => (
                    <Checkbox
                      key={i}
                      sub
                      detail
                      className="mt-3 first:mt-0"
                      body={body}
                    />
                  ))}
                </div>
              </>
            ) : (
              <Checkbox
                main
                plus
                body="[필수] 만 14세 이상이며 모두 동의합니다."
                onClickSecond={handleClickPlus("age")}
              />
            )}
            {isShowSub.notification ? (
              <>
                <Checkbox
                  main
                  minus
                  className="mt-4"
                  body="[선택] 광고성 정보 수신에 모두 동의합니다."
                  onClickSecond={handleClickMinus("notification")}
                />
                <div className="pt-4 pl-9">
                  {["앱푸시", "문자 메시지", "이메일"].map((body, i) => (
                    <Checkbox
                      key={i}
                      sub
                      detail
                      className="mt-3 first:mt-0"
                      body={body}
                    />
                  ))}
                </div>
              </>
            ) : (
              <Checkbox
                main
                plus
                className="mt-4"
                body="[선택] 광고성 정보 수신에 모두 동의합니다."
                onClickSecond={handleClickPlus("notification")}
              />
            )}
          </div>
          <div className="h-[72px] pt-5 ">
            <button
              className={cls(
                "block w-full text-white h-full rounded-xl font-semibold",
                isValid ? "bg-gray-900" : "bg-gray-200"
              )}
            >
              가입하기
            </button>
          </div>
        </div>
      </form>
      <Portal>
        <Toast isShow={isModalShow} message={"hihi"} />
      </Portal>
    </div>
  );
};

export default Join;
