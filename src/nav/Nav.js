import React from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";

import "../css/nav.css";

export default function Nav() {
  const location = useLocation();

  const getNavLocationClass = () => {
    switch (location.pathname) {
      // if the location is in home or / we want basically return to nav about
      case "/":
        return "nav-about";
      // /skills return skills-about and so on
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };
  // GET PAGE TITLE
  const getPageTitle = () => {
    switch (location.pathname) {
      // if the location is in home or / we want basically return to nav about
      case "/":
        return "ABOUT";
      // /skills return skills-about and so on
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navLocationClass = getNavLocationClass();
  const pageTitle = getPageTitle();

  // check if whether the past nav class that we passed as an argument matches to the current naviagation location class it's gonna return either true or false statement
  const isCurrentPage = (navClass) => {
    return navClass === navLocationClass;
  };
  // Path to page and image icon and alternative text and gonna have page title
  const renderNavLink = (to, imgSrc, altText, navClass) => {
    // storecurrent page that are passed the navClass
    const isCurrent = isCurrentPage(navClass);
    //if the linkClass is equal to  isCurrent going to run nav-link current  otherwise nav-link
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    // return link component that we put inside  of our whole navigation
    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navLocationClass}`}>
      {renderNavLink(
        // there are basiaclly all arguments that render navlink is taking the
        "/", //the to is the homepage or /
        astronautHelmet, //imgSrc
        "astronaut helmet icon", //altText
        "nav-about" //navClass
      )}
      {renderNavLink(
        // there are basiaclly all arguments that render navlink is taking the
        "/skills", //the to is the homepage or /
        deadEye, //imgSrc
        "dead-Eye icon", //altText
        "nav-skills" //navClass
      )}
      {renderNavLink(
        // there are basiaclly all arguments that render navlink is taking the
        "/projects", //the to is the homepage or /
        stack, //imgSrc
        "stack icon", //altText
        "nav-projects" //navClass
      )}
      {renderNavLink(
        // there are basiaclly all arguments that render navlink is taking the
        "/contact", //the to is the homepage or /
        envelope, //imgSrc
        "envelope icon", //altText
        "nav-contact" //navClass
      )}
    </nav>
  );
}
