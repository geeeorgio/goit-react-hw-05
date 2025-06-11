import { BeatLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <BeatLoader color="#8d8787" size={25} />
    </div>
  );
};

export default Loader;
