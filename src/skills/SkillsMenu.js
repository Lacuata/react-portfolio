import React, { Component } from "react";
import classNames from "classnames";
import "../css/skillsMenu.css";
import skills from "./skillsData.js";
import frontendIcon from "../assets/eagle-emblem.png";
import backendIcon from "../assets/hawk-emblem.png";

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    };
  }
  // handle click menu
  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
    });
  };
  // render skills from import
  renderContent = (skills) => {
    return skills.map((skill, index) => (
      // sub-skills-1 means and sub-skills-2
      <div key={index} className={`sub-skills-${this.state.activeMenuItem}`}>
        <h3>{skill.title}</h3>
        <div className="level-container">
          {/* //create new array with the spread and lengthh of 6  and set key attribute as i for skill.level*/}
          {/* this is the new array that contain 6 box */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`level-point ${
                // if i is lessthan to skill level filled it with css color else unfilled
                i < skill.level ? "filled" : "unfilled"
              }`}
            ></div>
          ))}
        </div>
      </div>
    ));
  };

  render() {
    const { activeMenuItem } = this.state;
    const menuItem = ["FRONT-END", "BACK-END"];

    const currentIcon = activeMenuItem === 1 ? frontendIcon : backendIcon;
    return (
      <div className="skill-menu">
        {menuItem.map((item, index) => (
          <div
            key={index}
            className={classNames("skill-item", {
              activeSkill: activeMenuItem === index + 1,
            })}
            onClick={() => this.handleMenuItemClick(index + 1)}
          >
            <h2 className="skill-title">{item}</h2>
          </div>
        ))}
        <img className="skill-icon" src={currentIcon} alt="current skills" />
        <div className="skill-sub-container">
          {/* this is the sub-skills-1 and skills-2 and the render skills */}
          {this.renderContent(skills[activeMenuItem])}
        </div>
      </div>
    );
  }
}
