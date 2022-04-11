import React from "react";

import { Container } from "react-bootstrap";
import List from "./List";

import './Footer.css';

function Footer () {
    return (
        <Container fluid className="footer d-flex flex-row justify-content-start">
            <List title="Empresa" link1="Blog" link2="Sobre" link3="Trabalhe Conosco" link4="Contato"/>
            <List title="Suporte" link1="Get Start" link2="FAQ" link3="Help Desk" link4="Reporte uma violação"/>
        </Container>
    )
}

export default Footer;