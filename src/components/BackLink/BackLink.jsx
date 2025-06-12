import { useNavigate } from "react-router-dom";
import s from "./BackLink.module.css";
import { ArrowLeft } from "lucide-react";

const BackLink = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={s.link}>
      <ArrowLeft className={s.arrowIcon} />
      Back
    </button>
  );
};

export default BackLink;
