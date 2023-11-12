import { useState } from "react";
import { useEffect } from "react";
import "../styles/Navbar.css";

interface Props {
  idArray: string[];
  headingArray: string[];
  inSection: boolean[];
}

function Navbar({ idArray, headingArray, inSection }: Props) {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("nav");
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
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
              <a
                className={`navbar-link ${inSection[index] ? "active" : ""}`}
                href={"#" + item}
              >
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
