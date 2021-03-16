import React from "react";
import classes from "./Rating.module.scss";

export const Rating = (props) => {
  return (
    <div className={classes.header__amogs}>
      <span>A</span>
      {/* {<p>3131</p>} */}
      <div>{props.points}</div>
    </div>
  );
};
