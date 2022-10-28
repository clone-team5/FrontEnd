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
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChangeId}
        value={inputs.id}
        type="text"
        className="bg-slate-600 w-4"
      />
      <input onChange={handleChangePw} value={inputs.pw} type="password" />
      <button>submit</button>
      <input type="button" onClick={handleClickSingup} value="sign up" />
    </form>
  );
};

export default Login;
