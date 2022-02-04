import React from "react";
import Cards from "./Cards";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {

  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <Cards className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClose}>Okay</Button>
        </footer>
      </Cards>
    </div>
  );
};

export default ErrorModal;
