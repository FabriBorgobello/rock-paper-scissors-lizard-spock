import * as React from "react";
import { OptionType } from "../../Types";
import Option from "../Option/Option";
import "./SelectMenu.scss";

interface Props {
  handleSelect: (option: OptionType) => void;
}

const SelectMenu = ({ handleSelect }: Props) => {
  return (
    <div className="select-menu paper-card">
      <ul className="options-container">
        <li>
          <Option type="scissors" onClick={() => handleSelect("scissors")} />
        </li>
        <li>
          <Option type="lizard" onClick={() => handleSelect("lizard")} />
        </li>
        <li>
          <Option type="spock" onClick={() => handleSelect("spock")} />
        </li>{" "}
        <li>
          <Option type="rock" onClick={() => handleSelect("rock")} />
        </li>{" "}
        <li>
          <Option type="paper" onClick={() => handleSelect("paper")} />
        </li>
      </ul>
    </div>
  );
};

export default SelectMenu;
