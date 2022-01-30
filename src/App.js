import { useState, useEffect } from "react";

import classes from "./App.module.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Users from "./components/Users";
import ContactInfo from "./components/ContactInfo";
import { fetchUsers } from "./fetchAPI";

/*
  In general, only the css took a bit long time for me to make app looks well. Implementation for all functionality took around 1 hour. Hope The implementation is not so bad. 
  Thank very much 😊
  */

const App = () => {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const handleRemoveUser = () => setSingleUser(null);

  const handleDisplayUser = (user) => setSingleUser(user);

  useEffect(() => {
    (async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    })();
  }, []);

  return (
    <div className={classes["content-container"]}>
      <Header icon={!!singleUser} onClick={handleRemoveUser} />
      {!singleUser && (
        <Form
          inputValue={inputValue}
          selectValue={selectValue}
          onSortChange={setSelectValue}
          onInputChange={setInputValue}
        />
      )}
      {!singleUser && users.length > 0 && (
        <Users
          handleDisplayUser={handleDisplayUser}
          users={users}
          sortingValue={selectValue}
          searchValue={inputValue}
        />
      )}
      {singleUser && <ContactInfo user={singleUser} />}
    </div>
  );
};

export default App;
