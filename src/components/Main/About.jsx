import React from "react";

import Portfolio from "./images/portfolio.svg"
import Share from "./images/share.svg"
import Feedback from "./images/feedback.svg";

import Section from "../UI/Section";

import Container from "react-bootstrap/Container";

function About () {
    return (
        <Container className="align-items-center d-flex flex-column p-5">
            <Section title="Mostre +"  text="Inclua todos seus projetos no Devtree e consiga mais visibilidade das stacks que você domina e suas habilidades." img={Portfolio} alt="Descrição" />
            <Section title="Compartilhe +" text="Adicione o Devtree em suas redes e alcance mais pessoas e empresas." img={Share} />
            <Section title="+ Feedbacks" text="Tenha mais feedbacks da comunidade com a ferramenta de comentários e classificação dos projetos." img={Feedback} />
        </Container>
    )
}

export default About;