import { useState } from "react";
import { useEffect } from "react";
import "../styles/Navbar.css";

interface Props {
  idArray: string[];
  headingArray: string[];
  imgSrc: string;
}

function Navbar({ idArray, headingArray, imgSrc }: Props) {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 83) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    addEventListener("scroll", handleScroll);
  });

  return (
    <nav className={`navbar ${isSticky ? "sticky" : "unsticky"}`}>
      <img src={imgSrc} alt="logo" />
      <ul className="link-box">
        {idArray.map((item, index) => (
          <li key={index}>
            <a className="navbar-link" href={"#" + item}>
              {headingArray[index]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
//"navbar" + (isSticky ? ".sticky" : ""
