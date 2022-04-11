import React from "react";

import Buttonc from "./Button";

import './Card.css'

function Card ({title, text, price, namebtn}) {
    return (
        <div className="align-items-center d-flex flex-column justify-content-between card p-4">
            <div className="d-flex flex-column justify-content-start">
                <h5>{title}</h5>
                <p className="price pb-3">{price}</p>
                <p>{text}</p>
            </div>
            <Buttonc title={namebtn}/>
        </div>
    )
}

export default Card;