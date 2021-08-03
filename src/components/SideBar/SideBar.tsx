import * as React from "react";
import { ScoreBoardType } from "../../Types";
import Rules from "../Rules/Rules";
import "./SideBar.scss";

interface Props {
  score: ScoreBoardType;
  handleReset: () => void;
  changeGoal: (newGoal: 3 | 5 | 10) => void;
  goal: 3 | 5 | 10;
}

const SideBar = ({ score, handleReset, changeGoal, goal }: Props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <aside className="tools">
      <div className="scoreboard">
        <div className="scores">
          <div className="player">
            <span className="name">You</span>
            <span className="number">{score.you}</span>
          </div>{" "}
          <div className="player">
            <span className="name">Oponent</span>
            <span className="number">{score.oponent}</span>
          </div>
        </div>
      </div>
      <div className="game-to">
        <span>Game to </span>
        <div className="options">
          <div onClick={() => changeGoal(3)} className={`point-option ${goal === 3 && "active"}`}>
            3
          </div>
          <div onClick={() => changeGoal(5)} className={`point-option ${goal === 5 && "active"}`}>
            5
          </div>
          <div onClick={() => changeGoal(10)} className={`point-option ${goal === 10 && "active"}`}>
            10
          </div>
        </div>
        <span> points</span>
      </div>
      <div className="buttons">
        <button className="btn" onClick={handleReset}>
          Reset
        </button>{" "}
        <button className="btn" onClick={showModal}>
          Rules
        </button>
      </div>
      {isModalOpen && <Rules closeModal={closeModal} />}
    </aside>
  );
};

export default SideBar;
