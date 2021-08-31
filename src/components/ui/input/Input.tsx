import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <div className={classes.input}>
    {props.label && <label htmlFor={props.id!}>{props.label!}</label>}
    <input {...props} ref={ref} />
  </div>
));

export default Input;
