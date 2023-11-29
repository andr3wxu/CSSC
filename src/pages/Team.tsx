import TeamGrid from "../components/TeamGrid";

const Team = () => {
  let nameArray = ["1", "2", "3", "4", "5", "6"];
  let imageArray = [
    "/images/ahyan.png",
    "/images/joshua.png",
    "/images/cheri.jpg",
    "/images/misha.jpg",
    "/images/haotian.jpg",
    "/images/janice.jpg",
  ];
  return (
    <div className="box team">
      <div className="container team">
        <TeamGrid nameArray={nameArray} imageArray={imageArray} />
      </div>
    </div>
  );
};

export default Team;
