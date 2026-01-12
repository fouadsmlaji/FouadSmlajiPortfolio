import "./App.css";
import "./Pages/HomePage.css";
import "./KeyFrames.css";
import "./Media.css";
import HomePage from "./Pages/HomePage";
import { HashRouter, Routes, Route } from "react-router-dom";  // Import HashRouter
import LandingPage from "./Pages/LandingPage";
import Projects from "./Pages/Projects";
import Projects2 from "./Pages/Projects2";
import ProjectComponent from "./Components/ProjectComponent";
import NotFound from "./Components/NotFound";  // Import the NotFound component

function App() {
  return (
    <HashRouter> {/* Use HashRouter instead of BrowserRouter */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tour" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects2" element={<Projects2 />} />
        <Route path="/projects/:id" element={<ProjectComponent />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
