import s from "./Notification.module.css";

const Notification = ({ msg }) => {
  return <div className={s.notification}>{msg}</div>;
};

export default Notification;
