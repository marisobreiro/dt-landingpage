import React from "react";

import Nav from 'react-bootstrap/Nav'
import './Header.css'

function Header () {
    return (
        <Nav 
            className="header align-items-center bg-light border-bottom d-flex flex-row justify-content-between p-4"
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <div className="header-title">
                <p className='header-title__icon'>&lt; &gt;</p>
            </div>
            <div className="d-flex flex-row">
                <Nav.Item>
                    <Nav.Link href="/home" className="text-dark">sobre</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className="text-dark">templates</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="text-dark">planos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="text-dark">ajuda</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        entrar
                    </Nav.Link>
                </Nav.Item>
            </div>
        </Nav>
    )
}

export default Header;