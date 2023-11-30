import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

const Accordion = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {};

  return (
    <div className="accordion-container">
      <div className="question" onClick={handleClick}></div>
      <div className="answer"></div>
    </div>
  );
};

export default Accordion;
