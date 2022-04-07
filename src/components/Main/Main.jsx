import React from "react";

import About from "./About";

import Container from "react-bootstrap/Container";

function Main () {
    return (
        <Container className="pt-5 text-center" >
            <h1>devtree</h1>
            <h3>Sua árvore de projetos</h3>
            <About />
        </Container>
    )
}

export default Main;