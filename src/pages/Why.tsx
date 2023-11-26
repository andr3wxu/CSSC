import "../styles/Why.css";
import "../styles/Page.css";

const Why = () => {
  return (
    <div className="box">
      <div className="container">
        <img className="image why" src="/images/why.jpeg" />
        <div className="why-container-right">
          <div className="info-box">
            <div className="info-card why">
              <h1 className="heading">
                WHY
                <span className="emphasis"> CSSC</span>
              </h1>
            </div>
            <div className="blurb why">
              <div>
                <h2>Who are we?</h2>
                <p>
                  We are a{" "}
                  <span className="bold">student-led organization</span>{" "}
                  committed to providing a diverse and{" "}
                  <span className="keyword">unique</span> learning experience to
                  junior high students in a setting that emphasizes both
                  individuality and teamwork. <br />
                </p>
              </div>
              <div>
                <h2>What do we do?</h2>
                <p>
                  <span className="bold">
                    Our <span className="keyword">mission</span> is simple:
                  </span>{" "}
                  bring students together to compete, to collaborate, and to
                  spark deeper thinking about the{" "}
                  <span className="bold">connection</span> between language and
                  science.
                </p>
              </div>
            </div>
          </div>
          <div>graphic placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Why;
