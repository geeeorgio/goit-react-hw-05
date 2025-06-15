import { Link } from "react-router-dom";
import s from "./BackLink.module.css";
import { ArrowLeft } from "lucide-react";

const BackLink = ({ to }) => {
  return (
    <Link to={to} className={s.link}>
      <ArrowLeft className={s.arrowIcon} />
      Go Back
    </Link>
  );
};

export default BackLink;
