import EarthImage from "../../public/assets/images/EarthImage.png";
import ReactIcon from "../../public/assets/images/Icons/React.svg";
import Vue from "../../public/assets/images/Icons/Vue.svg";
import Git from "../../public/assets/images/Icons/Git.svg";
import Bootstrap from "../../public/assets/images/Icons/Bootstrap.svg";
import Tailwind from "../../public/assets/images/Icons/Tailwind.svg";
import Html from "../../public/assets/images/Icons/Html.svg";
import Css from "../../public/assets/images/Icons/Css.svg";
import Javascript from "../../public/assets/images/Icons/Javascript.svg";
import Sass from"../../public/assets/images/Icons/Sass.svg";
import Express from "../../public/assets/images/Icons/expressjs-icon.svg";
import PostgreSQL from "../../public/assets/images/Icons/Postgresql_elephant.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {

   const [proceededStyle, setProceededStyle] = useState(false);
   const navigate = useNavigate();

   const style = {
      animation: "slideOut 3s, rotate 25s ",
   }

   const fadeStyle = {
    animation: 'fade 3s  '
   }

   function proceed() {
    setTimeout(() => {
      navigate("/projects");
   }, 0);
   }


  return (
    <div className="LandingPageSection">
      <div className="LandingPageContainer">
        <img src={EarthImage} alt="" className="EarthImage2" style={proceededStyle ?  style : {}}/>
        <div className="d-flex flex-row align-items-center justify-content-between iconsDiv " style={proceededStyle ?  fadeStyle : {}}>
        <img src={Express} alt="" height={60} className="expressIcon" />
        <img src={PostgreSQL} alt="" height={60} />
          <img src={ReactIcon} alt="" height={60} />
          <img src={Vue} alt="" height={60} />
          <img src={Git} alt="" height={60} />
          <img src={Bootstrap} alt="" height={60} />
          <img src={Tailwind} alt="" height={60} />
          <img src={Sass} alt="" height={60} />
          <img src={Html} alt="" height={60} />
          <img src={Css} alt="" height={60} />
          <img src={Javascript} alt="" height={60} />
          
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center row w-100" style={proceededStyle ?  fadeStyle : {}}>
          <div className="col-6 col-lg-6 h-100 hideDiv"></div>
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center h-100">
            <div className="pt-4">
              <h2 className="aboutTitle">Full Stack Developer</h2>
              <p className="aboutText">
              Results-driven Software Engineer with over 3 years of experience in full-stack web development. Skilled in building responsive, scalable web applications using React.js, Vue.js, WordPress, and modern backend technologies such as Express.js. Experienced in improving website performance, enhancing SEO, and delivering high-quality client projects. Passionate about creating impactful digital experiences and optimizing development workflows.
              </p>
              <button className="btn1" style={{marginLeft: "20px"}}>
                <a href="/Fouad Smlaji Resume.pdf" download="Fouad_Smlaji_Resume.pdf">Resume</a>
              </button>

            </div>
          </div>
        </div>

        <div className="proceedDiv">
         <button className="proceed" onClick={() => {
            setProceededStyle(true);
            proceed();
         }}>Proceed &#x2192;</button>
        </div>
      </div>
    </div>
  );
}
