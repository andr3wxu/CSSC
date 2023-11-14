import "../styles/List.css";

interface Props {
  headingArray: string[];
  infoArray: string[];
}

const List = ({ headingArray, infoArray }: Props) => {
  return (
    <>
      <ul className="info-list">
        {headingArray.map((heading, index) => (
          <li key={index}>
            <span className="info-type">{heading}: </span>
            {infoArray[index]}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
