import React from "react";

import { Container } from "react-bootstrap";
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";
import List from "./List";

import './Footer.css';

function Footer () {
    return (
        <Container fluid className="footer d-flex flex-column mt-5">
            <Container className="align-items-center footer d-flex flex-row justify-content-between">
                <div className="align-items-start d-flex flex-row">
                    <p className="footer__logo-icon">&lt;</p>
                    <h2>devtree</h2>
                    <p className="footer__logo-icon">&gt;</p>
                </div>
                <div className="footer d-flex flex-row justify-content-end">
                    <List title="Empresa" link1="Blog" link2="Sobre" link3="Trabalhe Conosco" link4="Contato"/>
                    <List title="Suporte" link1="Get Started" link2="FAQ" link3="Help Desk" link4="Reporte uma violação"/>
                </div>
            </Container>
            <hr></hr>
            <div className="d-flex flex-row justify-content-center p-3">
                <FaLinkedin className="mx-3 fs-4"/>
                <FaFacebookSquare className="mx-3 fs-4" />
                <FaInstagram className="mx-3 fs-4" />
                <FaGithub className="mx-3 fs-4" />
                <FaTiktok className="mx-3 fs-4" />
            </div>
            <p className="fs-7 text-center">Desenvolvido por Mariana Sobreiro</p>
        </Container>
    )
}

export default Footer;