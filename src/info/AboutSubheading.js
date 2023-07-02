import React from "react";
import classNames from "classnames";
import "../css/aboutMenu.css";

const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {
  // for career in menuItem it's gonna become sub-container career/education/personal
  const subContainerClass = `sub-container-${menuItem}`;

  return (
    <div
      // this is the sub-container-{menuItem= 1,2 ,3} and 2nd class active-subheading
      className={classNames(subContainerClass, { "active-subheading": active })}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <div className="p-container">{content}</div>
    </div>
  );
};

export default AboutSubheading;
