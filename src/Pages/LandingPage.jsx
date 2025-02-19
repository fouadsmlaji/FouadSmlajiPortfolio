import EarthImage from "../../public/assets/images/EarthImage.png";
import ReactIcon from "../../public/assets/images/Icons/React.svg";
import Vue from "../../public/assets/images/Icons/Vue.svg";
import Git from "../../public/assets/images/Icons/Git.svg";
import Bootstrap from "../../public/assets/images/Icons/Bootstrap.svg";
import Tailwind from "../../public/assets/images/Icons/Tailwind.svg";
import Html from "../../public/assets/images/Icons/Html.svg";
import Css from "../../public/assets/images/Icons/Css.svg";
import Javascript from "../../public/assets/images/Icons/Javascript.svg";
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
          <img src={ReactIcon} alt="" height={60} />
          <img src={Vue} alt="" height={60} />
          <img src={Git} alt="" height={60} />
          <img src={Bootstrap} alt="" height={60} />
          <img src={Tailwind} alt="" height={60} />
          <img src={Html} alt="" height={60} />
          <img src={Css} alt="" height={60} />
          <img src={Javascript} alt="" height={60} />
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center row w-100" style={proceededStyle ?  fadeStyle : {}}>
          <div className="col-6 col-lg-6 h-100 hideDiv"></div>
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center h-100">
            <div className="pt-4">
              <h2 className="aboutTitle">Frontend Developer</h2>
              <p className="aboutText">
                I am a frontend developer with a strong focus on React,
                dedicated to building high-performance, user-friendly web
                applications. With expertise in modern frontend technologies, I
                specialize in developing responsive and scalable interfaces that
                enhance user experience and engagement. My approach combines
                clean, maintainable code with industry best practices to ensure
                optimal functionality, accessibility, and performance. I am
                committed to continuous learning and staying up to date with
                emerging technologies to deliver innovative and efficient
                solutions.
              </p>
              <button className="btn1">
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
