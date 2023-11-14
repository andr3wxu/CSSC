import { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const getTimeLeft = () => {
    const eventDate = new Date("April 23, 2024 09:00:00");
    const currentDate = new Date();
    const difference = eventDate.getTime() - currentDate.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="home-container">
      <div className="info-box">
        <div className="info-card">
          <h1 className="home-heading">
            GET READY FOR <br />
            <span className="emphasis"> CSSC 2024</span>
          </h1>
          <ul className="info-list">
            <li>
              <span className="info-type">Date:</span> April 15th, 2023
            </li>
            <li>
              <span className="info-type">Location:</span> University of Calgary
            </li>
            <li>
              <span className="info-type">Cost:</span> FREE
            </li>
            <li>
              <span className="info-type">Who:</span> Students in grades 6-9
            </li>
          </ul>
        </div>
        <div className="countdown">
          {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}:
          {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}:
          {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}:
          {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
        </div>
      </div>
      <img className="home-image" src="/images/home.jpg" />
    </div>
  );
};

export default Home;
