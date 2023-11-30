import Accordion from "../components/Accordion";

const FAQ = () => {
  return (
    <div>
      <div className="box">
        <div className="container">
          <div className="info-box">
            <div className="info-card">
              <h1 className="heading">
                <span className="emphasis">FAQ</span>
              </h1>
            </div>
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
