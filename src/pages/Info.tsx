import "../styles/Info.css";
import "../styles/Page.css";
import List from "../components/List";
import PhotoCard from "../components/PhotoCard";

const Info = () => {
  const headingArray = ["Date", "Location", "Cost", "Who"]; // not efficient
  const infoArray = [
    "April 15th, 2024",
    "University of Calgary",
    "FREE",
    "Students in grades 6-9",
  ];
  return (
    <>
      <div className="box">
        <div className="container info">
          <div className="info-box info">
            <div className="info-card info">
              <h1 className="heading">
                EVENT
                <br />
                <span className="emphasis"> INFO</span>
              </h1>
            </div>
            <div className="why-blurb">
              <div className="list-box">
                <List headingArray={headingArray} infoArray={infoArray} />
              </div>
            </div>
          </div>
          <div className="container info-lower">
            <div className="info-box photos">
              <div className="info-card photos">
                <h1 className="heading sub">PHOTOS</h1>
              </div>
              <p>
                View <span className="keyword">photos</span> from our past
                events!
              </p>
              <div className="photo-container">
                <PhotoCard img="" caption="2019" />
                <PhotoCard img="" caption="2022" />
              </div>
            </div>
            <div className="info-box format">
              <div className="info-card">
                <h1 className="heading sub">FORMAT</h1>
                <p>
                  A more detailed schedule will be mailed out closer to the
                  event date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
