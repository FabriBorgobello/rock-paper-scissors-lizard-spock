import * as React from "react";
import { ReactComponent as GitHub } from "../../assets/images/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/images/linkedin.svg";
import "./NavBar.scss";

interface Props {}

const NavBar = (props: Props) => {
  return (
    <nav>
      <div className="nav-container">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/fabriborgobello/" target="_blank" rel="noopener noreferrer">
              <LinkedIn width="30" height="30" />
            </a>
          </li>
          <li>
            <a href="https://github.com/FabriBorgobello" target="_blank" rel="noopener noreferrer">
              <GitHub width="30" height="30" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
