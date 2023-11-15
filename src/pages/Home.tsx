import List from "../components/List";
import Countdown from "../components/Countdown";
import Form from "../components/Form.tsx";
import "../styles/Home.css";

const Home = () => {
  const headingArray = ["Date", "Location", "Cost", "Who"];
  const infoArray = [
    "April 15th, 2024",
    "University of Calgary",
    "FREE",
    "Students in grades 6-9",
  ];
  const eventDate = new Date("April 23, 2024 09:00:00"); // change date

  return (
    <div className="home-box">
      <div className="home-container">
        <div className="info-box">
          <div className="info-card">
            <h1 className="home-heading">
              GET READY FOR <br />
              <span className="emphasis"> CSSC 2024</span>
            </h1>
            <List headingArray={headingArray} infoArray={infoArray} />
          </div>
          <Countdown date={eventDate} />
        </div>
        <img className="home-image" src="/images/home.jpg" />
      </div>
      <Form />
    </div>
  );
};

export default Home;
