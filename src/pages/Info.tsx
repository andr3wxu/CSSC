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
            <div className="info-box format">
              <div className="info-card">
                <h1 className="heading sub">FORMAT</h1>
                <p>
                  A more detailed schedule will be mailed out closer to the
                  event date.
                </p>
              </div>
            </div>
            <div className="photo-container">
              <div className="info-box photos">
                <div className="info-card photos">
                  <h1 className="heading sub photos">PHOTOS</h1>
                  <p className="p-photos">
                    Click <span className="bold">below</span> to view{" "}
                    <span className="bold">photos</span> from our past events!
                  </p>
                </div>
              </div>
              <div className="p2019">
                <PhotoCard
                  img="/images/2019.jpg"
                  caption="2019"
                  link="https://photos.app.goo.gl/SvhyvWgVVuZkD6fK7"
                />
              </div>
              <div className="p2022">
                <PhotoCard
                  img="/images/2022.jpg"
                  caption="2022"
                  link="https://photos.app.goo.gl/R14r6dE7zuWYqYg88"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
