import React from "react";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import './Header.css'

function Header () {
    return (
        <Navbar collapseOnSelect expand="lg" className="header align-items-center border-bottom border-secondary d-flex flex-row justify-content-between p-4">
            <Container> 
                <Navbar.Brand href="#home" className="align-items-start pt-4 header-title d-flex flex-row">
                    <p className='header-title__icon'>&lt;</p>
                    <h2 className="text-light">devtree</h2>
                    <p className='header-title__icon'>&gt;</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="light" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#features" className="text-light">sobre</Nav.Link>
                        <Nav.Link href="#pricing" className="text-light">planos</Nav.Link>
                        <Nav.Link href="#pricing" className="text-light">templates</Nav.Link>
                        <Nav.Link href="#pricing" className="text-light">ajuda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;