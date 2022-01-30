import { MdArrowForwardIos } from "react-icons/md";
import classes from "./User.module.css";

const User = (props) => {
  const { picture, fullName, firstName, lastName } = props.user;
  const { state, country } = props.user.address;

  return (
    <>
      <div className={classes.user} onClick={() => props.onClick(props.user)}>
        <img src={picture} alt={fullName} />
        <div className={classes["user-info"]}>
          <h1>{`${firstName} ${lastName}`}</h1>
          <h2>
            {state} / {country}
          </h2>
        </div>
        <MdArrowForwardIos />
      </div>
      <div className={classes.line}></div>
    </>
  );
};

export default User;
