import classes from "./Form.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Form = (props) => {
  const { onSortChange, onInputChange, inputValue, selectValue } = props;
  return (
    <form className={classes["form-container"]}>
      <label>
        Search
        <div className={classes["icon-inside"]}>
          <BiSearchAlt2 />
          <input
            type="text"
            className={classes["input-text"]}
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
          />
        </div>
      </label>
      <label>
        Sort
        <select
          className={classes.select}
          value={selectValue}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value=""></option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
        </select>
      </label>
    </form>
  );
};

export default Form;
