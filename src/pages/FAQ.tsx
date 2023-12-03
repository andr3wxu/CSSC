import Accordion from "../components/Accordion";
import SignUpButton from "../components/SignUpButton";
import "../styles/FAQ.css";
import "../styles/App.css";

const FAQ = () => {
  let questionArray = [
    "I cannot find any teammates, or only have one teammate for a team of 2. Can I still register?",
    "Does everyone on my team have to be from the same school?",
    "Does everyone on my team have to be in the same grade?",
    "I have already registered, but a teammate had to drop out. What should I do?",
  ];
  let answerArray = [
    "Yes, you can still register, and we will try to match you up with other students with the same problem. However, if we cannot arrange for you to have a team of three, you will be ineligible for participation in the final team round. Thus, we recommend that you try your best to find a team of three.",
    "No, a team can be composed of teammates from different schools. However, you will be ineligible to receive the team trophy, as it should be displayed at a school represented by a team completely from that school.",
    "No, teams can be composed of various grades without being placed at any disadvantage.",
    "Please send us an email regarding who dropped out, as well as the name, school, grade, and email of a replacing teammate if you are able to find one.",
  ];
  return (
    <div>
      <div className="box">
        <div className="container faq">
          <div className="info-box faq">
            <div className="info-card faq">
              <h1 className="heading">
                CSSC <span className="emphasis">FAQ</span>
              </h1>
            </div>
            <div className="blurb faq">
              <p className="faq-description">
                Below are some <span className="keyword">questions</span> that
                we get asked frequently:
              </p>
              {questionArray.map((item, index) => (
                <Accordion
                  question={item}
                  answer={answerArray[index]}
                />
              ))}
            </div>
          </div>
          <img src="/images/faq-graphic.png" className="faq-graphic" />
          <div className="info-box sponsor">
            <div className="info-card sponsor">
              <h1 className="heading sub photos">SPONSORS</h1>
              <p className="p-photos">
                Our event is made possible with generous support from:
              </p>
            </div>
          </div>
          <div className="sponsor-box">
            <a href="https://calgaryfoundation.org/" target="_blank">
              <img
                src="/images/calgary-foundation.png"
                className="sponsor-image"
              />
            </a>
            <a href="https://ucalgary.ca/" target="_blank">
              <img
                src="/images/uofc-sponsor.png"
                className="sponsor-image uofc"
              />
            </a>
          </div>
          <div className="signup-message">
            And, if you haven't already...
            <SignUpButton text="SIGN UP" link="#home" targetBlank={false} />
            <br />
            Or email us with any questions!
            <a
              href="mailto:admin@csschallenge.ca"
              className="sign-up-button email"
            >
              EMAIL US
            </a>
          </div>
          <div className="copyright">&copy; CSSC 2023</div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
