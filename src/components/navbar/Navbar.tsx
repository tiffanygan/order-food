import React from "react";
import classes from "./Navbar.module.css";
import meals from "../../assets/pictures/meals.jpeg";
import CartButton from "./cartbutton/CartButton";
import Summary from "./summary/Summary";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt={"lots of yummy food"} />
      </div>
      <Summary />
    </React.Fragment>
  );
};

export default Navbar;
