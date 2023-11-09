import "../styles/TitleCard.css";

interface Props {
  imgSrc: string;
}

const TitleCard = ({ imgSrc }: Props) => {
  return (
    <div className="title-logo-container">
      <img src={imgSrc} className="title-logo" />
      <h1 className="title">Calgary Science Spelling Challenge</h1>
      <h2 className="subtitle">
        Not your ordinary spelling bee . . . are you ready?
      </h2>
    </div>
  );
};

export default TitleCard;
