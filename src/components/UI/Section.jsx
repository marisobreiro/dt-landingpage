import React from "react";

import './Section.css'

function Section ({title, text, img, alt}) {
    return (
        <div className="section d-flex flex-row align-items-center"> 
            <img src={img} alt={alt} className="section__image"/>
            <div className="flex-column px-5">
                <h4>{title}</h4>
                <p className="section__text">{text}</p>
            </div>
        </div>
    )
}

export default Section;