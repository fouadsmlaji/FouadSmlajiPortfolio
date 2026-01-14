import { useState } from 'react'
import EarthImage from '../../public/assets/images/EarthImage.png'
import { useNavigate } from 'react-router-dom';

export default function HomePage(){

    const [earthstyle, setEarthStyle] = useState();
    const navigate = useNavigate();

    const Earthstyle = {
        animation: "click 1s ",
    } 

    function EarthFunction(){
        setTimeout(() => {
           navigate("/tour")
        }, 700);
    }


    return(
        <>
        <div className="homePageSection"> 
            <div className="homePageContainer container">
                <div className='d-flex flex-row titleDiv'>
                    <h1 className="homePageTitle" >Fouad </h1>
                    <h1 className="homePageTitle" > Smlaji</h1> 
                </div>
                <img 
                  src={EarthImage} 
                  alt="" 
                  style={earthstyle} 
                  className='earthImage'
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  onClick={() => {
                    setEarthStyle(Earthstyle);
                    EarthFunction()
                  }}  
                />
                <span className='Tour'>CLICK FOR A TOUR</span>
            </div>
        </div>
        </>
       
    )
}