import "../styles/TeamGrid.css";

interface Props {
  nameArray: string[];
  // imageArray: string[];
}

const TeamGrid = ({ nameArray }: Props) => {
  return (
    <>
      <div className="team-grid">
        {nameArray.map((name, index) => (
          <div className={`team-member ${(index - 1) % 3 == 0 ? "hex" : ""}`}>
            <div className="hexagon-container">
              <div className="hexagon">{nameArray[index]}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamGrid;
