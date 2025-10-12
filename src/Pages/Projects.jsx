import { Link, useNavigate } from "react-router-dom";
import Mars1 from "/assets/images/Mars.png";
import Mars3 from "/assets/images/Mars3.png";
import Earth from "/assets/images/Earth.png";
import Moon from "/assets/images/Moon.png";
import Jupiter from "/assets/images/Jupiter.png";
import Mercury from "/assets/images/Mercury.png";
import Neptune from "/assets/images/Neptune.png";
import Jup from "/assets/images/Jup.png";

import { useEffect, useState } from "react";

export default function Projects() {
  const [rotateStyle, setRotateStyle] = useState(false);
  const navigate = useNavigate();

  const planetRotateStyle = {
    animation: "rotate 80s infinite",
  };

  const textRotate = {
    animation: "reverseRotate 80s infinite",
  };

  function Return(){
    navigate("/tour");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotateStyle(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="projectsSection ">
      <div
        className="projectsContainer container "
        style={rotateStyle ? planetRotateStyle : {}}
      >
        <div className="d-flex flex-row justify-content-center align-items-center gap-4">
          <div
            className=" align-items-center justify-content-end d-flex "
            style={{ zIndex: "3", marginRight:"-50px" }}
          >
            <Link to="/projects/1" className="projectDiv" >
              <img src={Mars3} alt="Mars 2" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project I
              </h2>
            </Link>
          </div>
          <div
            className=" align-items-center justify-content-center d-flex marginDiv1"
            style={{ marginTop: "-300px", zIndex: "3" }}
          >
            <Link to="/projects/2" className="projectDiv" id="project-2">
              <img src={Earth} alt="Mars 1" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project II
              </h2>
            </Link>
          </div>
          <div
            className=" align-items-center justify-content-center d-flex marginDiv1"
            style={{ marginTop: "-300px", zIndex: "3" }}
          >
            <Link to="/projects/3" className="projectDiv" id="project-2">
              <img src={Jup} alt="Mars 1" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project III
              </h2>
            </Link>
          </div>
          <div
            className=" align-items-center justify-content-start d-flex "
            style={{ zIndex: "3" , marginLeft:"-50px" }}
          >
            <Link to="/projects/4" className="projectDiv" id="project-3">
              <img src={Mars1} alt="Mars 3" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project IV
              </h2>
            </Link>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-center align-items-center gap-4">
          <div
            className=" align-items-center justify-content-end d-flex "
            style={{ zIndex: "3" , marginRight:"-50px" }}
          >
            <Link to="/projects/5" className="projectDiv" id="project-4">
              <img src={Moon} alt="Mars 3" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project V
              </h2>
            </Link>
          </div>
          <div
            className=" align-items-center justify-content-center d-flex marginDiv2"
            style={{ marginBottom: "-300px", zIndex: "3" }}
          >
            <Link to="/projects/6" className="projectDiv" id="project-5">
              <img src={Jupiter} alt="Mars 1" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project VI
              </h2>
            </Link>
          </div>
          <div
            className=" align-items-center justify-content-center d-flex marginDiv2"
            style={{ marginBottom: "-300px", zIndex: "3" }}
          >
            <Link to="/projects/7" className="projectDiv" id="project-5">
              <img src={Neptune} alt="Mars 1" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project VII
              </h2>
            </Link>
          </div>
          <div
            className=" align-items-center justify-content-start d-flex "
            style={{ zIndex: "3",  marginLeft:"-50px"  }}
          >
            <Link to="/projects/8" className="projectDiv" id="project-6">
              <img src={Mercury} alt="Mars 2" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project VIII
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="ProjectsTitle">Projects</h1>
      <div className="ReturnDiv">
         <button className="proceed" onClick={() => {

            Return();
         }}>&#x2190; Return </button>
        </div>
    </div>
  );
}
