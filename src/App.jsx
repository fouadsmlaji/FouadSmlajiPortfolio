import "./App.css";
import "./Pages/HomePage.css";
import "./Components/Header.css";
import "./KeyFrames.css";
import "./Media.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Projects from "./Pages/Projects";
import ProjectComponent from "./Components/ProjectComponent";

function App() {
  return (
    <>
      {/* {location.pathname === "/" && <Header />} */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/tour" element={<LandingPage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:id" element={<ProjectComponent />}></Route>x
      </Routes>
    </>
  );  
}

export default App;
