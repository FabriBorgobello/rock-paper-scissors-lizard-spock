import * as React from "react";
import "./App.scss";
import GameOver from "./components/GameOver/GameOver";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import SideBar from "./components/SideBar/SideBar";
import VersusMenu from "./components/VersusMenu/VersusMenu";
import { OptionType, PlayerType, ScoreBoardType } from "./Types";

const App = () => {
  const [score, setScore] = React.useState<ScoreBoardType>({ you: 0, opponent: 0 });
  const [selectedOption, setSelectedOption] = React.useState<OptionType | null>(null);
  const [goal, setGoal] = React.useState<3 | 5 | 10>(5);

  const handleAddPoint = React.useCallback((player: PlayerType) => {
    setScore((prevState) => ({ ...prevState, [player]: prevState[player] + 1 }));
  }, []);

  const handleSelect = (option: OptionType) => {
    setSelectedOption(option);
  };
  const handleReset = () => {
    setSelectedOption(null);
    setScore({ you: 0, opponent: 0 });
  };

  const handleNextRound = () => {
    setSelectedOption(null);
  };
  const handleChangeGoal = (newGoal: 3 | 5 | 10) => {
    handleReset();
    setGoal(newGoal);
  };

  return (
    <div className="app">
      <NavBar />
      <div className="main-container">
        <Header />
        {score.you < goal && score.opponent < goal && (
          <div className="playing-board">
            {!selectedOption ? (
              <SelectMenu handleSelect={handleSelect} />
            ) : (
              <VersusMenu selectedOption={selectedOption} addPoint={handleAddPoint} nextRound={handleNextRound} />
            )}
            <SideBar score={score} handleReset={handleReset} changeGoal={handleChangeGoal} goal={goal} />
          </div>
        )}

        {score.you >= goal && <GameOver winner="you" reset={handleReset} />}
        {score.opponent >= goal && <GameOver winner="opponent" reset={handleReset} />}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
