import React from "react";

import Nav from 'react-bootstrap/Nav'
import './Header.css'

function Header () {
    return (
        <Nav 
            className="header align-items-center border-bottom border-secondary d-flex flex-row justify-content-between p-4"
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <div className="header-title align-items-start d-flex flex-row">
                <p className='header-title__icon'>&lt;</p>
                <h2>devtree</h2>
                <p className='header-title__icon'>&gt;</p>
            </div>
            <div className="d-flex flex-row">
                <Nav.Item>
                    <Nav.Link href="/home" className="text-light">sobre</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className="text-light">templates</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="text-light">planos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="text-light">ajuda</Nav.Link>
                </Nav.Item>
            </div>
        </Nav>
    )
}

export default Header;