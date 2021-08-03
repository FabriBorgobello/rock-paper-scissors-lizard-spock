import * as React from "react";
import { ReactComponent as LizardIcon } from "../../assets/images/icon-lizard.svg";
import { ReactComponent as PaperIcon } from "../../assets/images/icon-paper.svg";
import { ReactComponent as RockIcon } from "../../assets/images/icon-rock.svg";
import { ReactComponent as ScissorsIcon } from "../../assets/images/icon-scissors.svg";
import { ReactComponent as SpockIcon } from "../../assets/images/icon-spock.svg";
import { OptionType } from "../../Types";
import "./Option.scss";

interface Props {
  type: OptionType;
  onClick?: () => void;
  presentational?: boolean;
}

const icons = { rock: <RockIcon />, paper: <PaperIcon />, scissors: <ScissorsIcon />, lizard: <LizardIcon />, spock: <SpockIcon /> };

const Option = ({ type, onClick, presentational = false }: Props) => {
  return (
    <div className="option-container">
      {presentational ? (
        <div className={`option-btn ${type}`}>
          {icons[type]}
          <span>{type}</span>
        </div>
      ) : (
        <button className={`option-btn ${type}`} onClick={onClick}>
          {icons[type]}
          <span>{type}</span>
        </button>
      )}
    </div>
  );
};

export default Option;
