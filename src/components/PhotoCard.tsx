import "../styles/PhotoCard.css";

interface Props {
  img: string;
  caption: string;
  link: string;
}

const PhotoCard = ({ img, caption, link }: Props) => {
  return (
    <a className="info-box photo-card" href={link} target="_blank">
      <img src={img} className="img-photos" />
      <div className="info-card caption">{caption}</div>
    </a>
  );
};

export default PhotoCard;
