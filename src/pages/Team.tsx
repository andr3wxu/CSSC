import TeamGrid from "../components/TeamGrid";
import "../styles/Team.css"

const Team = () => {
  let nameArray = [
    "Ahyan Kabir",
    "Joshua Cheng",
    "Cheri Dang",
    "Misha Kapadia",
    "Haotian Fang",
    "Janice Xie",
  ];
  let positionArray = [
    "PRESIDENT",
    "DEPUTY DIRECTOR",
    "CONTENT DIRECTOR",
    "IT DIRECTOR",
    "OUTREACH DIRECTOR",
    "OPERATIONS DIRECTOR",
  ];
  let schoolArray = [
    "Class of 2024 – Westmount Charter School",
    "Class of 2024 – Western Canada High School",
    "Class of 2026 – Westmount Charter School",
    "Class of 2026 - Sir Winston Churchill High School",
    "Class of 2026 – Westmount Charter School",
    "Class of 2026 – Sir Winston Churchill High School",
  ];
  let imageArray = [
    "/images/ahyan.png",
    "/images/joshua.png",
    "/images/cheri.jpg",
    "/images/misha.jpg",
    "/images/haotian.jpg",
    "/images/janice.jpg",
  ];
  return (
    <div className="box">
      <div className="container team">
        <div className="info-box team">
          <div className="info-card team">
            <h1 className="heading">OUR <span className="emphasis">TEAM</span></h1>
          </div>
        </div>
        <TeamGrid
          nameArray={nameArray}
          positionArray={positionArray}
          schoolArray={schoolArray}
          imageArray={imageArray}
        />
      </div>
    </div>
  );
};

export default Team;
