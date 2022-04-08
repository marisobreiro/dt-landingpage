import React from "react";

import Button from "./Button";

import './Card.css'

function Card ({title, text}) {
    return (
        <div className="card border border-radius rounded p-5 text-center">
            <h5>{title}</h5>
            <p>{text}</p>
            <Button title="Teste"/>
        </div>
    )
}

export default Card;