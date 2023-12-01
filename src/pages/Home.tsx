import List from "../components/List";
import Countdown from "../components/Countdown";
import Form from "../components/Form.tsx";
import "../styles/Home.css";
import "../styles/Page.css";
import SignUpButton from "../components/SignUpButton.tsx";

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
    <div className="box">
      <div className="container">
        <div className="info-box home">
          <div className="info-card home">
            <h1 className="home-heading">
              GET READY FOR <br />
              <span className="emphasis"> CSSC 2024</span>
            </h1>
            <div className="list-box home">
              <List headingArray={headingArray} infoArray={infoArray} />
            </div>
          </div>
          <Countdown date={eventDate} />
        </div>
        <img className="image home" src="/images/home.jpg" />
      </div>
      {window.innerWidth < 800 ? (
        <SignUpButton
          text="SIGN UP"
          link="https://forms.fillout.com/t/t2dcEXx5AMus"
          targetBlank={true}
        />
      ) : (
        <Form />
      )}
    </div>
  );
};

export default Home;
