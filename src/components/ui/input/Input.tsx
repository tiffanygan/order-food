import React from "react";
import classes from "./Input.module.css";

const Input: React.FC<any> = (props) => {
  return (
    <div className={classes.input}>
      {props.label && <label htmlFor={props.id!}>{props.label!}</label>}
      <input {...props} />
    </div>
  );
};

export default Input;
