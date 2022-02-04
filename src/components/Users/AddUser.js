import React, { useState } from "react";
import Cards from "../UI/Cards";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid UserName",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a age greater than 0",
      });
      return;
    }

    const newUser = {
      username: enteredUsername,
      age: +enteredAge,
    };

    props.addUser(newUser);

    console.log(enteredAge, enteredUsername);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const onChangeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const onChangeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const errorHandler = () => {
      setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal onClose={errorHandler} title={error.title} message={error.message}></ErrorModal>
      )}
      <Cards className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={onChangeUsernameHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={onChangeAgeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Submit</Button>
        </form>
      </Cards>
    </div>
  );
};

export default AddUser;
