import { HiUsers } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import classes from "./Header.module.css";

const Header = (props) => {
  const { icon, onClick } = props;

  return (
    <div className={classes.header}>
      {!icon && <HiUsers />}
      {icon && <BiArrowBack onClick={onClick} style={{ cursor: "pointer" }} />}
      <h1>My Contacts</h1>
    </div>
  );
};

export default Header;
