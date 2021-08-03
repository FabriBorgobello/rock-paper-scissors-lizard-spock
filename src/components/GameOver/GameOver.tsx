import * as React from "react";
import { PlayerType } from "../../Types";
import "./GameOver.scss";
interface Props {
  winner: PlayerType;
  reset: () => void;
}

const GameOver = ({ winner, reset }: Props) => {
  if (winner === "you") {
    return (
      <div className="game-over paper-card">
        <span className="main-message">WINNER!!!</span>
        <span className="description">Congratulations. I'm sure your opponent wants a rematch.</span>
        <button onClick={reset}>Play again</button>
      </div>
    );
  } else if (winner === "opponent") {
    return (
      <div className="game-over paper-card">
        <span className="main-message">GAME OVER</span>
        <span className="description">Better luck next time... Bazinga!</span>
        <button onClick={reset}>Play again</button>
      </div>
    );
  }
  return null;
};

export default GameOver;
