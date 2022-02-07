import React, { useState, useRef } from "react";
import Cards from "../UI/Cards";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const refEnteredName = nameInputRef.current.value;
    const refEnteredAge = ageInputRef.current.value

    if (refEnteredName.trim().length === 0 || refEnteredAge.trim().length === 0) {
      setError({
        title: "Invalid UserName",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (+refEnteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a age greater than 0",
      });
      return;
    }

    const newUser = {
      username: refEnteredName,
      age: +refEnteredAge,
    };

    props.addUser(newUser);

    console.log(refEnteredAge, refEnteredName);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
      setError(null);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal onClose={errorHandler} title={error.title} message={error.message}></ErrorModal>
      )}
      <Cards className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Submit</Button>
        </form>
      </Cards>
    </Wrapper>
  );
};

export default AddUser;
