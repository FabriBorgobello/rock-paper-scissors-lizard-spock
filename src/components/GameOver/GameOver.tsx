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
      <div>
        Congratulations. You won!!
        <button onClick={reset}>Play again</button>
      </div>
    );
  } else if (winner === "oponent") {
    return (
      <div>
        You lost! Better luck next time...
        <button onClick={reset}>Play again</button>
      </div>
    );
  }
  return null;
};

export default GameOver;
