import * as React from "react";
import "./Header.scss";

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="header-container">
      <div className="header">
        <h1>Rock, Paper, Scissors, Lizard, Spock!</h1>
      </div>
    </div>
  );
};

export default Header;
