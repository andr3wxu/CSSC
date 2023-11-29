import "../styles/TeamGrid.css";
import FlipCard from "./FlipCard";

interface Props {
  nameArray: string[];
  imageArray: string[];
}

const TeamGrid = ({ nameArray, imageArray }: Props) => {
  return (
    <>
      <div className="team-grid">
        {nameArray.map((name, index) => (
          <div className={`team-member ${(index - 1) % 3 == 0 ? "hex" : ""}`}>
            <FlipCard
              nameArray={nameArray}
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
