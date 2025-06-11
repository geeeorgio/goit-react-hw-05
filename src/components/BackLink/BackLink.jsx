import { useNavigate } from "react-router-dom";
import s from "./BackLink.module.css";

const BackLink = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <button onClick={handleClick} className={s.link}>
      Back
    </button>
  );
};

export default BackLink;
