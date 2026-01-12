import { useNavigate, Link } from "react-router-dom";
import Mars1 from "../../public/assets/images/Mars.png";
import Mars3 from "../../public/assets/images/Mars3.png";
import Earth from "../../public/assets/images/Earth.png";
import Moon from "../../public/assets/images/Moon.png";
import Jupiter from "../../public/assets/images/Jupiter.png";
import Mercury from "../../public/assets/images/Mercury.png";
import Neptune from "../../public/assets/images/Neptune.png";
import Jup from "../../public/assets/images/Jup.png";

import { useEffect, useState } from "react";

export default function Projects2() {
  const [rotateStyle, setRotateStyle] = useState(false);
  const navigate = useNavigate();

  const planetRotateStyle = {
    animation: "rotate 80s infinite",
  };

  const textRotate = {
    animation: "reverseRotate 80s infinite",
  };

  function Return(){
    navigate("/projects");
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
            <Link to="/projects/9" className="projectDiv">
              <img src={Mars3} alt="Project IX" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project IX
              </h2>
            </Link>
          </div>
          <div
            className=" align-items-center justify-content-center d-flex marginDiv1"
            style={{ marginTop: "-300px", zIndex: "3" }}
          >
            <div className="projectDiv" style={{ cursor: "default" }}>
              <img src={Earth} alt="Mars 1" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project X
              </h2>
            </div>
          </div>
          <div
            className=" align-items-center justify-content-center d-flex marginDiv1"
            style={{ marginTop: "-300px", zIndex: "3" }}
          >
            <div className="projectDiv" style={{ cursor: "default" }}>
              <img src={Jup} alt="Mars 1" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project XI
              </h2>
            </div>
          </div>
          <div
            className=" align-items-center justify-content-start d-flex "
            style={{ zIndex: "3" , marginLeft:"-50px" }}
          >
            <div className="projectDiv" style={{ cursor: "default" }}>
              <img src={Mars1} alt="Mars 3" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project XII
              </h2>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-center align-items-center gap-4">
          <div
            className=" align-items-center justify-content-end d-flex "
            style={{ zIndex: "3" , marginRight:"-50px" }}
          >
            <div className="projectDiv" style={{ cursor: "default" }}>
              <img src={Moon} alt="Mars 3" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project XIII
              </h2>
            </div>
          </div>
          <div
            className=" align-items-center justify-content-center d-flex marginDiv2"
            style={{ marginBottom: "-300px", zIndex: "3" }}
          >
            <div className="projectDiv" style={{ cursor: "default" }}>
              <img src={Jupiter} alt="Mars 1" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project XIV
              </h2>
            </div>
          </div>
          <div
            className=" align-items-center justify-content-center d-flex marginDiv2"
            style={{ marginBottom: "-300px", zIndex: "3" }}
          >
            <div className="projectDiv" style={{ cursor: "default" }}>
              <img src={Neptune} alt="Mars 1" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project XV
              </h2>
            </div>
          </div>
          <div
            className=" align-items-center justify-content-start d-flex "
            style={{ zIndex: "3",  marginLeft:"-50px"  }}
          >
            <div className="projectDiv" style={{ cursor: "default" }}>
              <img src={Mercury} alt="Mars 2" className="SunImage" />
              <h2 className="projectName" style={rotateStyle ? textRotate : {}}>
                Project XVI
              </h2>
            </div>
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

