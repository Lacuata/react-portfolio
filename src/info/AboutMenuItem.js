import React from "react";
import classNames from "classnames";
import "../css/aboutMenu.css";

const AboutMenuItem = ({ title, active, onClick }) => {
  return (
    // here is the item.active
    <div className={classNames("item", { active })} onClick={onClick}>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default AboutMenuItem;
