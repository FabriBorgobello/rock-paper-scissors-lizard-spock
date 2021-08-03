import * as React from "react";
import rulesGraphic from "../../assets/images/rules.png";
import spockImg from "../../assets/images/spock.jpg";
import "./Rules.scss";

interface Props {
  closeModal: () => void;
}

const Rules = ({ closeModal }: Props) => {
  const [active, setActive] = React.useState(false);
  const [activeHelp, setActiveHelp] = React.useState<0 | 1 | 2>(0);

  React.useEffect(() => {
    setActive(true);
  }, []);
  const handleClose = () => {
    setActive(false);
    setTimeout(() => closeModal(), 300);
  };
  const changeHelp = () => {
    if (activeHelp === 0) setActiveHelp(1);
    else if (activeHelp === 1) setActiveHelp(2);
  };

  return (
    <div className={`rules-container ${active ? "opening" : "closing"}`}>
      <div className="backdrop" onClick={handleClose} />
      {activeHelp === 0 && <Help1 active={active} handleClose={handleClose} activeHelp={activeHelp} changeHelp={changeHelp} />}
      {activeHelp === 1 && <Help2 active={active} handleClose={handleClose} activeHelp={activeHelp} changeHelp={changeHelp} />}
      {activeHelp === 2 && <Help3 active={active} handleClose={handleClose} activeHelp={activeHelp} changeHelp={changeHelp} />}
    </div>
  );
};

export default Rules;

interface HelpProps {
  active: boolean;
  handleClose: () => void;
  activeHelp: 0 | 1 | 2;
  changeHelp: () => void;
}
const Help1 = ({ active, handleClose, activeHelp, changeHelp }: HelpProps) => {
  return (
    <div className={`modal ${active ? "opening" : "closing"}`}>
      <button className="close-btn" onClick={handleClose}>
        Close
      </button>
      <div className={`help-container ${!activeHelp ? "active" : "no-active"}`}>
        <h2>As a wise man once said...</h2>
        <div className="quote">
          <q>
            Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates
            Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock, and as it always has... Rock crushes Scissors.
          </q>
          <br />
          <span className="author">- Dr. Sheldon Lee Cooper</span>
        </div>
        <div className="buttons">
          <button onClick={changeHelp} className="more-help">
            That was not helpful at all.
          </button>
        </div>
      </div>
    </div>
  );
};
const Help2 = ({ active, handleClose, activeHelp, changeHelp }: HelpProps) => {
  return (
    <div className={`modal ${active ? "opening" : "closing"}`}>
      <button className="close-btn" onClick={handleClose}>
        Close
      </button>
      <div className={`help-container ${activeHelp ? "active" : "no-active"}`}>
        <h2>Oh, come on. It&apos;s not that difficult...</h2>
        <img src={rulesGraphic} alt="rules" />
        <div className="buttons">
          <button onClick={changeHelp} className="more-help simple">
            What is a SPOCK?
          </button>
          <button onClick={handleClose} className="more-help">
            Okay, I get it
          </button>
        </div>
      </div>
    </div>
  );
};
const Help3 = ({ active, handleClose, activeHelp, changeHelp }: HelpProps) => {
  return (
    <div className={`modal ${active ? "opening" : "closing"}`}>
      <button className="close-btn" onClick={handleClose}>
        Close
      </button>
      <div className={`help-container ${activeHelp ? "active" : "no-active"}`}>
        <h2>Really? You should watch more television</h2>
        <div className="quote">
          <q>Spock is a fictional character in the Star Trek media franchise. Originally played by actor Leonard Nimoy</q>
        </div>
        <img className="spock-img" src={spockImg} alt="Leonard Nimoy" />

        <div className="buttons">
          <button onClick={handleClose} className="more-help">
            Okay, I get it
          </button>
        </div>
      </div>
    </div>
  );
};
