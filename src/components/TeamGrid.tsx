import "../styles/TeamGrid.css";
import FlipCard from "./FlipCard";

interface Props {
  nameArray: string[];
  positionArray: string[];
  schoolArray: string[];
  imageArray: string[];
}

const TeamGrid = ({
  nameArray,
  positionArray,
  schoolArray,
  imageArray,
}: Props) => {
  return (
    <>
      <div className="team-grid">
        {nameArray.map((name, index) => (
          <div className={`team-member ${(index - 1) % 3 == 0 ? "hex" : ""}`}>
            <FlipCard
              nameArray={nameArray}
              positionArray={positionArray}
              schoolArray={schoolArray}
              imageArray={imageArray}
              index={index}
            />
          </div>
        ))}
      </div>
    </>
  );
};

//{nameArray[index]}

export default TeamGrid;
