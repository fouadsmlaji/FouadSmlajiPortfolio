import "./App.css";
import "./Pages/HomePage.css";
import "./Components/Header.css";
import "./KeyFrames.css";
import "./Media.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Projects from "./Pages/Projects";
import ProjectComponent from "./Components/ProjectComponent";

function App() {
  return (
    <>
      {/* {location.pathname === "/" && <Header />} */}
      <BrowserRouter basename="/FouadSmlajiPortfolio">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tour" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  );  
}

export default App;
