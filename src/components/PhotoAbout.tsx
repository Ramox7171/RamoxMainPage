import React from "react";
import { useState } from "react";
import '../style/PhotoAbout.scss';
import ramoxph from '/img/ramoxph.jpg';

import closered from '../assets/icons/closered.png';
import { photoAboutText } from "../assets/store/DATA";


const PhotoAbout = () => {

    const [isAbout, setIsAbout] = useState<boolean>(false);

    const handleShowIsAbout = () => {

        setIsAbout((prevState) => !prevState);
    }

    return <>
        {isAbout ? (<div className="photoAbout">
            <div className="photoAbout__content">
                <div className="photoAbout__picture">

                    <img src={ramoxph} />
                    <div className="photoAbout__info">
                        <h2>I could put a sentimental quote from some recognizable creator here, but I’m the kind of person who prefers to get things done rather than build theories around them.</h2>
                    </div>
                </div>
                <div className="photoAbout__content__text">
                    <h2>Who Am I?</h2>
                    <p>{photoAboutText}</p>
                    <div className="photoAbout__content__close">
                        <img src={closered} onClick={handleShowIsAbout} />
                    </div>
                </div>
                <button onClick={handleShowIsAbout}> Nevermind...</button>

            </div>



        </div>) : (<div className="photoAbout">

            <button onClick={handleShowIsAbout}>
                About
            </button>
        </div>)}

    </>
}


export default PhotoAbout;