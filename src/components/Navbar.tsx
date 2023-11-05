interface Props {
  idArray: string[];
  headingArray: string[];
}

function Navbar({ idArray, headingArray }: Props) {
  return (
    <nav>
      <ul>
        {idArray.map((item, index) => (
          <li>
            <a href={"#" + item}>{headingArray[index]}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
