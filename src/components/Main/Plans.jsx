import React from "react";

import { Container } from "react-bootstrap";

import Card from "../UI/Card";
import "./Plans.css";

function Plans () {
    return (
        <Container className="p-5 d-flex flex-row justify-content-center">
            <Card title="Standard" price="Free" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." namebtn="Cadastre-se"/>
            <Card title="Silver" price="R$7,90" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra nunc vitae tortor ultricies dignissim." namebtn="Assine" />
            <Card title="Gold" price="R$19,90" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra nunc vitae tortor ultricies dignissim. neque non porta volutpat, elit odio tempor est, eget tempor" namebtn="Assine" />
        </ Container>
    )
}

export default Plans;