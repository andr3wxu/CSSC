import { useState, useEffect } from "react";
import "./styles/App.css";
import TitleCard from "./components/TitleCard.tsx";
import Navbar from "./components/Navbar.tsx";
import Page from "./components/Page.tsx";
import Home from "./pages/Home.tsx";
import Why from "./pages/Why.tsx";
import Info from "./pages/Info.tsx";
import Team from "./pages/Team.tsx";
import FAQ from "./pages/FAQ.tsx";
import SignUpButton from "./components/SignUpButton.tsx";

function App() {
  const idArray = ["home", "why", "info", "team", "faq"];
  const headingArray = ["Home", "Why", "Info", "Team", "FAQ"];
  const pageArray = [<Home />, <Why />, <Info />, <Team />, <FAQ />]; // This can probably be optimized?
  const [inSection, setInSection] = useState(Array(idArray.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      setInSection(
        idArray.map((item) => {
          const section = document.getElementById(item);
          if (section) {
            const rect = section.getBoundingClientRect();
            return (
              rect.top <= window.innerHeight * 0.4 &&
              rect.bottom >= window.innerHeight * 0.4
            );
          }
        })
      );
    };
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [inSection]);

  return (
    <>
      <TitleCard imgSrc="/images/logo-fancy.png" />
      <Navbar
        idArray={idArray}
        headingArray={headingArray}
        inSection={inSection}
      />
      {pageArray.map((page, index) => (
        <Page
          key={index}
          index={index}
          id={idArray[index]}
          content={page}
          inSection={inSection}
        />
      ))}
    </>
  );
}

export default App;
