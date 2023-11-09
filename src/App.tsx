import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Page from "./components/Page.tsx";
import Home from "./pages/Home.tsx";
import Why from "./pages/Why.tsx";
import Info from "./pages/Info.tsx";
import Team from "./pages/Team.tsx";
import FAQ from "./pages/FAQ.tsx";

const idArray = ["home", "why", "info", "team", "faq"];
const headingArray = ["Home", "why?", "info", "team", "FAQ"];

function App() {
  return (
    <>
      <Navbar
        idArray={idArray}
        headingArray={headingArray}
        imgSrc="components/cssc-logo.png"
      />
      <Page id="home" content={<Home />} />
      <Page id="why" content={<Why />} />
      <Page id="info" content={<Info />} />
      <Page id="team" content={<Team />} />
      <Page id="faq" content={<FAQ />} />
    </>
  );
}

export default App;
