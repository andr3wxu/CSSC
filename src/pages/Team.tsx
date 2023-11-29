import TeamGrid from "../components/TeamGrid";

const Team = () => {
  let nameArray = ["1", "2", "3", "4", "5", "6"];
  return (
    <div className="box team">
      <div className="container team">
        <TeamGrid nameArray={nameArray} />
      </div>
    </div>
  );
};

export default Team;
