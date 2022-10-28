import { useNavigate } from "react-router";
interface InforProps {
  name: string;
  url: string;
}

const Infor = ({ name, url }: InforProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <li
      onClick={handleClick}
      className="cursor-pointer motion-reduce:hidden first:mt-0 mt-3 text-gray-400 text-sm"
    >
      {name}
    </li>
  );
};

export default Infor;
