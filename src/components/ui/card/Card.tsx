import React from "react";
import classes from "./Card.module.css";

interface CardProps {}

const Card: React.FC<CardProps> = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
