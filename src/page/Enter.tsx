import { useEffect, useState } from "react";
import Join from "./Join";
import Login from "./Login";

interface Props {
  login?: boolean;
  join?: boolean;
}

const Enter = ({ login, join }: Props) => {
  const [navStates, setNavStates] = useState({ isFadeout: true, to: "" });
  return (
    <>
      {login ? <Login {...{ navStates, setNavStates }} /> : null}
      {join ? <Join {...{ navStates, setNavStates }} /> : null}
    </>
  );
};

export default Enter;
