import { FormEventHandler, useState, ChangeEventHandler } from "react";
import { useNavigate } from "react-router";
interface Inputs {
  id: string;
  pw: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<Inputs>({ id: "", pw: "" });
  const handleChangeId: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setInputs((cur) => ({ ...cur, id: target.value }));
  };
  const handleChangePw: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setInputs((cur) => ({ ...cur, pw: target.value }));
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log("inputs : ", inputs);
    const data = await (await fetch("url")).json();
    console.log(data);
    setInputs({ id: "", pw: "" });
  };
  const handleClickSingup = () => {
    navigate("/signup");
  };
  return (
    <div className="w-[1200px] mx-auto px-10">
      <form
        className="w-[400px] h-[756px] mx-auto pt-[60px] pb-40"
        onSubmit={handleSubmit}
      >
        <div className="h-full">
          <h2 className="text-center pb-[50px] before:w-[250px] before:h-[56px] before:content-[''] before:bg-[length:250px_56px] before:inline-block before:bg-[url(https://kream.co.kr/_nuxt/img/login_title.9f9ccc8.png)]">
            <span className="w-[1px] h-[1px] overflow-hidden absolute ">
              KREAM
            </span>
          </h2>
          <div className="pt-[10px] pb-[14px]">
            <h3 className="text-[13px]">이메일 주소</h3>
            <input
              onChange={handleChangeId}
              value={inputs.id}
              type="text"
              className="w-full pr-[30px] transition-all pl-0 border-b border-b-gray-200 border-0 outline-none focus:border-b focus:border-b-gray-800 focus:outline-none border-transparent focus:border-transparent focus:ring-0 placeholder:text-gray-200 focus:placeholder:text-transparent"
              placeholder="예) kream@kream.co.kr"
            />
            <p className="text-[11px] leading-4">hi</p>
          </div>
          <h3 className="text-[13px]">비밀번호</h3>
          <input
            onChange={handleChangePw}
            value={inputs.pw}
            type="password"
            className="w-full pr-[30px] transition-all pl-0 border-b border-b-gray-200 border-0 outline-none focus:border-b focus:border-b-gray-800 focus:outline-none border-transparent focus:border-transparent focus:ring-0"
          />
          <button>submit</button>
          <input type="button" onClick={handleClickSingup} value="sign up" />
        </div>
      </form>
    </div>
  );
};

export default Login;
