import * as React from "react";
import { OptionType, PlayerType } from "../../Types";
import Option from "../Option/Option";
import "./VersusMenu.scss";
interface Props {
  selectedOption: OptionType;
  addPoint: (player: "you" | "oponent") => void;
  nextRound: () => void;
}
const options: OptionType[] = ["rock", "paper", "scissors", "lizard", "spock"];

const VersusMenu = ({ selectedOption, addPoint, nextRound }: Props) => {
  const [winner, setWinner] = React.useState<PlayerType | "tie" | null>(null);
  const [oponentSelectedOption] = React.useState<OptionType>(options[Math.floor(Math.random() * 5)]);

  const getWinner = React.useCallback(
    (user: OptionType, oponent: OptionType) => {
      if (user === "rock") {
        if (oponent === "rock") {
          setWinner("tie");
        } else if (oponent === "scissors" || oponent === "lizard") {
          setWinner("you");
          addPoint("you");
        } else if (oponent === "paper" || oponent === "spock") {
          setWinner("oponent");
          addPoint("oponent");
        }
      } else if (user === "paper") {
        if (oponent === "paper") {
          setWinner("tie");
        } else if (oponent === "rock" || oponent === "spock") {
          setWinner("you");
          addPoint("you");
        } else if (oponent === "scissors" || oponent === "lizard") {
          setWinner("oponent");
          addPoint("oponent");
        }
      } else if (user === "scissors") {
        if (oponent === "scissors") {
          setWinner("tie");
        } else if (oponent === "paper" || oponent === "lizard") {
          setWinner("you");
          addPoint("you");
        } else if (oponent === "rock" || oponent === "spock") {
          setWinner("oponent");
          addPoint("oponent");
        }
      } else if (user === "lizard") {
        if (oponent === "lizard") {
          setWinner("tie");
        } else if (oponent === "paper" || oponent === "spock") {
          setWinner("you");
          addPoint("you");
        } else if (oponent === "rock" || oponent === "scissors") {
          setWinner("oponent");
          addPoint("oponent");
        }
      } else if (user === "spock") {
        if (oponent === "spock") {
          setWinner("tie");
        } else if (oponent === "scissors" || oponent === "rock") {
          setWinner("you");
          addPoint("you");
        } else if (oponent === "paper" || oponent === "lizard") {
          setWinner("oponent");
          addPoint("oponent");
        }
      }
    },
    [addPoint]
  );

  React.useEffect(() => {
    getWinner(selectedOption, oponentSelectedOption);
  }, [getWinner, oponentSelectedOption, selectedOption]);

  return (
    <div className="versus-menu paper-card">
      <div className="choice you">
        <span className="text">You chose:</span>
        <Option type={selectedOption} presentational />
      </div>
      <div className="center">
        <h3>
          {winner === "you" && "You win! :)"}
          {winner === "oponent" && "You lose! :("}
          {winner === "tie" && "It's a tie!"}
        </h3>
        <button onClick={nextRound}>Next round</button>
      </div>
      <div className="choice oponent">
        <span className="text">Your oponent chose:</span>
        <Option type={oponentSelectedOption} presentational />
      </div>
    </div>
  );
};

export default VersusMenu;
