import React from "react";
import { useState } from "react";
import '../style/PhotoAbout.scss';
import ramoxph from '/img/ramoxph.jpg';
import { lorem } from "../assets/store/DATA";
import closered from '../assets/icons/closered.png';


const PhotoAbout =()=>{

    const [isAbout,setIsAbout] = useState<boolean>(false);

    const handleShowIsAbout = ()=>{

        setIsAbout((prevState)=> !prevState);
    }

    return <>
    {isAbout? (<div className="photoAbout">
        <div className="photoAbout__content">
            
          <img src={ramoxph} />
          <div className="photoAbout__content__text">
            <h2>test</h2>
            <p>{lorem}</p>
            <div className="photoAbout__content__close">
                <img src={closered} onClick={handleShowIsAbout} />
            </div>
          </div>
          
        </div>
        
        

    </div>):(<div className="photoAbout">

        <button onClick={handleShowIsAbout}>
            About
        </button>
    </div>)}
    
    </>
}


export default PhotoAbout;