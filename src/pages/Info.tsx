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
            <div className="blurb event-info">
              <div className="list-box">
                <List headingArray={headingArray} infoArray={infoArray} />
              </div>
            </div>
          </div>
          <div className="container info-lower">
            <div className="info-box format">
              <div className="info-card">
                <h1 className="heading sub">FORMAT</h1>
              </div>
              <div className="blurb info">
                <div>
                  <p>
                    The <span className="keyword">CSSC</span> is split across
                    three unique rounds:
                  </p>
                </div>
                <div className="round">
                  <h2 className="round-label">
                    Round <span className="emphasis info">1</span>
                  </h2>
                  <div className="round-info">
                    <div className="heading sub info">Individual </div>
                    <p>
                      <span className="keyword">30 </span>
                      words from biology, chemistry, or physics worth
                      <span className="keyword"> 1</span>,{" "}
                      <span className="keyword">2</span> or{" "}
                      <span className="keyword">3 </span>
                      points will be read out, one at a time, to the
                      competitors. To earn points, the competitor must write
                      these correctly within a time limit.{" "}
                      <span className="bold">Most points wins!</span>
                    </p>
                  </div>
                </div>
                <div className="round">
                  <h2 className="round-label">
                    Round <span className="emphasis info">2</span>
                  </h2>
                  <div className="round-info">
                    <div className="heading sub info">Individual </div>
                    <p>
                      Competitors will first have to correctly verbally spell as
                      many words as possible in{" "}
                      <span className="keyword">2</span> time-pressed speed
                      rounds. Top performers then advance to a traditional
                      spelling bee type knockout stage where they will take
                      turns verbally spelling words.{" "}
                      <span className="bold">
                        The last person standing wins!
                      </span>
                    </p>
                  </div>
                </div>
                <div className="round">
                  <h2 className="round-label">
                    Round <span className="emphasis info">3</span>
                  </h2>
                  <div className="round-info">
                    <div className="heading sub info">Team </div>
                    <p>
                      After <span className="keyword">3</span> preliminary
                      cycles, the top <span className="keyword">8</span> teams
                      will go head-to-head in a bracket to determine the winner
                      of the <span className="bold">CSSC trophy</span>.
                    </p>
                  </div>
                </div>
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
          <div className="medal-trophy">
            <img src="/images/medals.png" className="image info medal" />
            <img src="/images/trophy.png" className="image info trophy" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
