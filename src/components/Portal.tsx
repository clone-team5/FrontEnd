import ReactDOM from "react-dom";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Portal = ({ children }: Props) => {
  const modalElement = document.querySelector("#portal") as HTMLElement;
  return ReactDOM.createPortal(children, modalElement);
};

export default Portal;
