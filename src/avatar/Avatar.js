import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/avatar.png";
import "../css/avatar.css";

const Avatar = ({ page }) => {
  // we pass page here so if we go to contact is about avatar contact and etc.
  const avatarClass = `avatar ${page}`;
  //   we define shadow-opverlay for each page so the css of shadow-overlay gonna apply at about skill contact  projects
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImage} className={avatarClass} alt="Avatar" />
    </>
  );
};

// functionalities additional
Avatar.propTypes = {
  // the page we are passing and
  page: PropTypes.string.isRequired,
};

export default Avatar;
