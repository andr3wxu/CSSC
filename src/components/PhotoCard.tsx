import React from "react";
import "../styles/PhotoCard.css";

interface Props {
  img: string;
  caption: string;
}

const PhotoCard = ({ img, caption }: Props) => {
  return (
    <a
      className="info-box photo-card"
      href="https://csschallenge.ca/"
      target="_blank"
    >
      <img src={img} className="img-photos" />
      <div className="info-card caption">{caption}</div>
    </a>
  );
};

export default PhotoCard;
