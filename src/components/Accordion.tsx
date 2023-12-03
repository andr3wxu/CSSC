import { useState } from "react";
import "../styles/Accordion.css";

interface Props {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer}: Props) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`accordion-container ${isToggled ? "toggled" : ""}`}>
      <div className="question-container" onClick={handleClick}>
        <div className={`q-number ${isToggled ? "toggled" : ""}`}>
          {isToggled ? "A" : "Q"}
        </div>
        <div className={`question ${isToggled ? "toggled" : ""}`}>
          {question}
        </div>
        <div className="plus-minus">{isToggled ? "-" : "+"}</div>
      </div>
      <div className="answer-container">
        <div className={`answer ${isToggled ? "toggled" : ""}`}>{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
