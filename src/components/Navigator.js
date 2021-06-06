import React from "react";
import { Link } from "react-router-dom";
import GitIcon from "./gitIcon";


class Navigator extends React.Component {
  constructor() {
    super();
    this.state = {

      // to give class if a tag in nav is active
      underlineActive: true,

    };
  }

  //when About li in nav is active give underline class
  underlineActiveAbout = () => {

    this.setState({
      underlineActive: true,
    });

  };

  //when projects li in nav is active give underline class
  underlineActiveProjects = () => {

    this.setState({
      underlineActive: false,
    });

  };

  render() {
    return (

      <ul className="navigator">
      
        <li className="navigator-li-image"></li>
      
        <li>
          <div className="navigator-a-container">
            <Link
              to="./About"
              className={
                this.state.underlineActive ? "under-line-to-active-a" : null
              }
              onClick={this.underlineActiveAbout}
            >
              About
            </Link>

            <Link
              to="/Projects"
              className={
                this.state.underlineActive ? null : "under-line-to-active-a"
              }
              onClick={this.underlineActiveProjects}
            >
              Projects
            </Link>
          </div>
        </li>
        <li id="gitIcon-container">

            <GitIcon url={"https://github.com/E-sa/"} />

        </li>
      </ul>
    );
  }
}

export default Navigator;
