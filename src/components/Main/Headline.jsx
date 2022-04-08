import React from "react";

import Container from "react-bootstrap/Container";

import './Headline.css'

function Headline () {
    return (
        <Container fluid className="headline d-flex flex-row justify-content-center align-items-center">
            <h1 className="headline__title">Reúna seus projetos em um só lugar_</h1>
        </Container>
    )
}

export default Headline;