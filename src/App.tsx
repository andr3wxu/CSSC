import { useState, useEffect } from "react";
import "./App.css";
import TitleCard from "./components/TitleCard.tsx";
import Navbar from "./components/Navbar.tsx";
import Page from "./components/Page.tsx";
import Home from "./pages/Home.tsx";
import Why from "./pages/Why.tsx";
import Info from "./pages/Info.tsx";
import Team from "./pages/Team.tsx";
import FAQ from "./pages/FAQ.tsx";

function App() {
  const idArray = ["home", "why", "info", "team", "faq"];
  const headingArray = ["Home", "Why", "Info", "Team", "FAQ"];
  const pageArray = [<Home />, <Why />, <Info />, <Team />, <FAQ />]; // This can probably be optimized?

  const [inSection, setInSection] = useState(Array(idArray.length).fill(false));
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setInSection(
        idArray.map((item) => {
          const section = document.getElementById(item);
          if (section) {
            const rect = section.getBoundingClientRect();
            // if (window.scrollY >= rect.top && window.scrollY < rect.bottom) {
            //   console.log(rect.top);
            //   console.log(rect.bottom);
            //   console.log(item);
            // }
            return window.scrollY >= rect.top && window.scrollY < rect.bottom;
          }
        })
      );
    };
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);
  // useEffect(() => {
  //   console.log(inSection);
  // });

  return (
    <>
      <TitleCard imgSrc="/images/cssc-logo.png" />
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
      <a href="#home" className="sign-up-button">
        SIGN UP
      </a>
    </>
  );
}

export default App;
