import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Page from "./components/Page.tsx";
import Home from "./pages/Home.tsx";
import Why from "./pages/Why.tsx";
import Info from "./pages/Info.tsx";

const idArray = ["home", "why", "info"];
const headingArray = ["Home", "Why?", "Info"];

function App() {
  return (
    <>
      <Navbar idArray={idArray} headingArray={headingArray} />
      <Page id="home" content={<Home />} />
      <Page id="why" content={<Why />} />
      <Page id="info" content={<Info />} />
    </>
  );
}

export default App;
