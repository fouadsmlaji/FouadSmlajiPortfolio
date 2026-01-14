import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectsData from "../Data/Projects"; // Ensure the import is correct
import { SlideshowLightbox } from "lightbox.js-react";

export default function ProjectComponent() {
  const { id } = useParams(); // Get the ID from the URL

  const [project, setProject] = useState(null);
  const [appear, setAppear] = useState(false);

  const TextFade = {
    animation:
      "typing 4s steps(30, end), blink 0.5s step-end infinite 4s, appear 6s",
    opacity: "0",
    overflow: "hidden",
    whitesSpace: "nowrap",
    display: "inline-block",
    borderRight: "3px solid white",
  };

  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Find the project by ID instead of the path
    const foundProject = ProjectsData.find((Proj) => Proj.id === id);
    setProject(foundProject);
    setFade(true);
    const timer = setTimeout(() => {
      setAppear(true);
    }, 6500);
    return () => clearTimeout(timer);
  }, [id]);

  if (!project) {
    return <div>Project Not Found</div>;
  }

  return (
    <div className="ProjectComponentSection">
      <div className="ProjectComponentContainer container">
        <div className="d-flex flex-column position-absolute">
          <h1
            className="ProjectComponentTitle text-center"
            style={fade ? TextFade : {}}
          >
            {" "}
            {project.title}
          </h1>
        </div>
        <div
          className=" flex-row alight-items-center justify-content-center row ContainerDiv"
          style={{ display: appear ? "flex" : "none" }}
        >
          <div className="d-flex flex-column align-items-center justify-content-center col-lg-6 col-12 gap-2">
            <SlideshowLightbox>
              <img 
                src={project.images[0]} 
                alt="" 
                className="mainImage" 
                loading="lazy"
                decoding="async"
              />
            </SlideshowLightbox>
            <SlideshowLightbox className="d-flex flex-row  smallImagesDiv row  ">
              <img 
                src={project.images[1]} 
                alt="" 
                className="col-4 p-0" 
                loading="lazy"
                decoding="async"
              />
              <img 
                src={project.images[2]} 
                alt="" 
                className="col-4 p-0" 
                loading="lazy"
                decoding="async"
              />
              <img 
                src={project.images[3]} 
                alt="" 
                className="col-4 p-0" 
                loading="lazy"
                decoding="async"
              />
            </SlideshowLightbox>
          </div>
          <div className="d-flex  flex-column col-lg-6 col-12 descriptionDiv">
            <h2 className="text-start">{project.title}</h2>
            <p>{project.description}</p>
           <div className="d-flex flex-row align-items-center gap-2">
           <button className="btn-primary col-6">
              <Link className="btn-primary" to={project.link}>
                Check Website
              </Link>
            </button>
            <button className="btn-primary col-6">
              <Link className="btn-primary " to="/projects">
                Return
              </Link>
            </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
