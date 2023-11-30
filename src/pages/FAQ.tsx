import Accordion from "../components/Accordion";
import "../styles/FAQ.css";

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
        <div className="container">
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
                  index={index}
                />
              ))}
            </div>
          </div>
          <img src="/images/faq-graphic.png" className="faq-graphic" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
