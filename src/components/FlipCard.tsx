import "../styles/FlipCard.css";
import { useState } from "react";

interface Props {
  nameArray: string[];
  imageArray: string[];
  index: number;
}

const FlipCard = ({ nameArray, imageArray, index }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    console.log("true");
  };

  return (
    <>
      <div className={`hexagon-container ${isFlipped ? "flipped" : ""}`}>
        <div className="hexagon-border">
          <div className="hexagon-image" onClick={handleFlip}>
            <img src={imageArray[index]} className="member-image" />
            <div className={`back ${isFlipped ? "flipped" : ""}`}>hi</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
