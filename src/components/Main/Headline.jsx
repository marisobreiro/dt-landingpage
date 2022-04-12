import React from "react";

import Container from "react-bootstrap/Container";
import ReactTypingEffect from 'react-typing-effect';


import './Headline.css'

function Headline () {
    return (
        <Container fluid className="headline d-flex flex-row justify-content-center align-items-center">
            <ReactTypingEffect className="headline__title fs-1"
                text={["Reúna seus projetos em um só lugar_"]} speed={50}
            />
        </Container>
    )
}

export default Headline;