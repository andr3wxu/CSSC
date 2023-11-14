import { useState, useEffect } from "react";
import "../styles/Countdown.css";

interface Props {
  date: Date;
}

const Countdown = ({ date }: Props) => {
  const getTimeLeft = () => {
    const eventDate = date;
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
    <div className="countdown">
      {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}:
      {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}:
      {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}:
      {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
    </div>
  );
};

export default Countdown;
