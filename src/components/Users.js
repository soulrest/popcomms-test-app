import classes from "./Users.module.css";
import User from "./User";

const Users = ({ users, handleDisplayUser, sortingValue, searchValue }) => {
  const onDisplayUserClick = (user) => {
    handleDisplayUser(user);
  };

  let sortedUsers = [...users];

  if (searchValue !== "") {
    const search = searchValue.toLowerCase();
    sortedUsers = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(search) ||
        user.lastName.toLowerCase().includes(search) ||
        user.address.country.toLowerCase().includes(search) ||
        user.address.state.toLowerCase().includes(search)
    );
  }

  if (sortingValue !== null) {
    sortedUsers.sort((a, b) => {
      if (a[sortingValue] < b[sortingValue]) return -1;
      if (a[sortingValue] > b[sortingValue]) return 1;
      return 0;
    });
  }

  return (
    <div className={classes["users-container"]}>
      {sortedUsers.map((user) => {
        return <User key={user.id} user={user} onClick={onDisplayUserClick} />;
      })}
    </div>
  );
};

export default Users;
