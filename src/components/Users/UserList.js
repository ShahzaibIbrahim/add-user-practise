import React from "react";
import Cards from "../UI/Cards";

import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Cards className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.username}>
            {user.username} ({user.age} year old)
          </li>
        ))}
      </ul>
    </Cards>
  );
};

export default UserList;
