import React, { Component } from "react";
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import InfoData from "./InfoData";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";

export default class AboutMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // it means that whenever we go to about we always see the first title or start at first title
      activeMenuItem: 1,
      // same goes to subheading it always start at first subheading
      activeSubheading: 1,
    };
  }

  // handle click menu
  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: 1,
    });
  };
  // jhandle subheading click
  handleSubheadingClick = (subheading) => {
    this.setState({
      activeSubheading: subheading,
    });
  };

  render() {
    const { activeMenuItem, activeSubheading } = this.state;
    const menuItems = ["PERSONAL", "EDUCATION", "CAREER"];
    // activeMenuItem - 1 because arrays is always zero base so if we want the first
    const activeMenuTitle = menuItems[activeMenuItem - 1];
    const activeMenuIcon =
      // ternary operator
      activeMenuTitle === "PERSONAL"
        ? personalIcon
        : activeMenuTitle === "EDUCATION"
        ? educationIcon
        : careerIcon;

    const infodata = InfoData[activeMenuItem];

    return (
      <>
        <div className="left-container-menu">
          {menuItems.map((item, index) => (
            <AboutMenuItem
              key={index}
              title={item}
              active={activeMenuItem === index + 1}
              onClick={() => this.handleMenuItemClick(index + 1)}
            />
          ))}
        </div>

        <div className="right-container-menu">
          <div className="icon-title-right">
            <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
            <h3>{activeMenuTitle}</h3>
          </div>
          {infodata.map((data, index) => (
            <AboutSubheading
              key={index}
              title={data.title}
              content={data.content}
              active={activeSubheading === index + 1}
              onClick={() => this.handleSubheadingClick(index + 1)}
              menuItem={activeMenuItem}
            />
          ))}
        </div>
      </>
    );
  }
}
