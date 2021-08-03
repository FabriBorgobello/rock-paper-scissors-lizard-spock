import * as React from "react";
import { OptionType, PlayerType } from "../../Types";
import Option from "../Option/Option";
import "./VersusMenu.scss";
interface Props {
  selectedOption: OptionType;
  addPoint: (player: "you" | "opponent") => void;
  nextRound: () => void;
}
const options: OptionType[] = ["rock", "paper", "scissors", "lizard", "spock"];

const VersusMenu = ({ selectedOption, addPoint, nextRound }: Props) => {
  const [winner, setWinner] = React.useState<PlayerType | "tie" | null>(null);
  const [opponentSelectedOption] = React.useState<OptionType>(options[Math.floor(Math.random() * 5)]);

  const getWinner = React.useCallback(
    (user: OptionType, opponent: OptionType) => {
      if (user === "rock") {
        if (opponent === "rock") {
          setWinner("tie");
        } else if (opponent === "scissors" || opponent === "lizard") {
          setWinner("you");
          addPoint("you");
        } else if (opponent === "paper" || opponent === "spock") {
          setWinner("opponent");
          addPoint("opponent");
        }
      } else if (user === "paper") {
        if (opponent === "paper") {
          setWinner("tie");
        } else if (opponent === "rock" || opponent === "spock") {
          setWinner("you");
          addPoint("you");
        } else if (opponent === "scissors" || opponent === "lizard") {
          setWinner("opponent");
          addPoint("opponent");
        }
      } else if (user === "scissors") {
        if (opponent === "scissors") {
          setWinner("tie");
        } else if (opponent === "paper" || opponent === "lizard") {
          setWinner("you");
          addPoint("you");
        } else if (opponent === "rock" || opponent === "spock") {
          setWinner("opponent");
          addPoint("opponent");
        }
      } else if (user === "lizard") {
        if (opponent === "lizard") {
          setWinner("tie");
        } else if (opponent === "paper" || opponent === "spock") {
          setWinner("you");
          addPoint("you");
        } else if (opponent === "rock" || opponent === "scissors") {
          setWinner("opponent");
          addPoint("opponent");
        }
      } else if (user === "spock") {
        if (opponent === "spock") {
          setWinner("tie");
        } else if (opponent === "scissors" || opponent === "rock") {
          setWinner("you");
          addPoint("you");
        } else if (opponent === "paper" || opponent === "lizard") {
          setWinner("opponent");
          addPoint("opponent");
        }
      }
    },
    [addPoint]
  );

  React.useEffect(() => {
    getWinner(selectedOption, opponentSelectedOption);
  }, [getWinner, opponentSelectedOption, selectedOption]);

  return (
    <div className="versus-menu paper-card">
      <div className="choice you">
        <span className="text">You chose:</span>
        <Option type={selectedOption} presentational />
      </div>
      <div className="center">
        <h3>
          {winner === "you" && "You win! :)"}
          {winner === "opponent" && "You lose! :("}
          {winner === "tie" && "It's a tie!"}
        </h3>
        <button onClick={nextRound}>Next round</button>
      </div>
      <div className="choice opponent">
        <span className="text">Your opponent chose:</span>
        <Option type={opponentSelectedOption} presentational />
      </div>
    </div>
  );
};

export default VersusMenu;
