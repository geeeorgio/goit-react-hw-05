import { Link, useLocation } from "react-router-dom";
import s from "./BackLink.module.css";
import { ArrowLeft } from "lucide-react";

const BackLink = () => {
  const location = useLocation();

  return (
    <Link to={location.state || "/"} className={s.link}>
      <ArrowLeft className={s.arrowIcon} />
      Go Back
    </Link>
  );
};

export default BackLink;
