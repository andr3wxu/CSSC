import { useState } from "react";
import { useEffect } from "react";
import "../styles/Navbar.css";

interface Props {
  idArray: string[];
  headingArray: string[];
}

function Navbar({ idArray, headingArray }: Props) {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("nav");
      if (element) {
        const rect = element.getBoundingClientRect();
        const top = rect.top;
        if (top === 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="navbar-container" id="nav">
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <ul className={`link-box ${isSticky ? "sticky" : ""}`}>
          {idArray.map((item, index) => (
            <li key={index}>
              <a className="navbar-link" href={"#" + item}>
                {headingArray[index]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
//"navbar" + (isSticky ? ".sticky" : ""
