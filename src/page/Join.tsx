import React, {
  useState,
  useCallback,
  FormEventHandler,
  ChangeEventHandler,
} from "react";
import axios from "axios";

interface user {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const emailCheck = (email: string) => {
    const reg =
      /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
    return reg.test(email);
  };

  const pwCheck = (pw: string) => {
    const reg = /^[a-zA-Z0-9]{4,30}$/;
    return reg.test(pw);
  };

  console.log(email, password, confirmPassword);

  /* const registerHandler = useCallback<HTML>(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (email === "" || password === "" || confirmPassword === "") {
        alert("양식을 모두 입력해주세요");
        return;
      }
    },
    [email, password, confirmPassword]
  ); */

  const typeEmail: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    SetEmail(target.value);
  };

  const typePw: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    SetPassword(target.value);
  };

  const typeCPw: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    SetConfirmPassword(target.value);
  };

  return (
    <div>
      <input type="text" onChange={typeEmail} value={email}></input>
      <button type="submit">중복 체크</button>
      <input type="text" onChange={typePw} value={password}></input>
      <input type="text" onChange={typeCPw} value={confirmPassword}></input>
      <button
        type="submit"
        onClick={() => {
          console.log(
            "email : " + email + "password : " + password,
            "confirm : " + confirmPassword
          );
        }}
      >
        회원가입
      </button>
    </div>
  );
};

export default Signup;
