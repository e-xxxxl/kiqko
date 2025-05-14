import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { DropdownButton, Nav } from 'react-bootstrap';
import './Footer.css';
import { Dropdown } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className="footer-area">
            <Container>
                <Row>
                    <Col md={3}>
                        <p className="p-copy-right">© Copyright 2022, KIQKO</p>
                    </Col>

                    <Col className="ps-0" md={7}>
                        <Nav className="nav-footer">
                            <Nav.Item>
                                <Nav.Link href="/terms">TERMS OF USE</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/privacy">PRIVACY POLICY</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/cookie-policy">COOKIE POLICY</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/safety-tips">SAFETY TIPS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/faq">FAQ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="li-dooted" href="/contact-us">
                                    CONTACT US
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col md={2}>
                        <DropdownButton className="drop-down-custom" id="dropdown-basic-button" title="LANGUAGE">
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>French</Dropdown.Item>
                            <Dropdown.Item>Chinese</Dropdown.Item>
                            <Dropdown.Item>German</Dropdown.Item>
                            <Dropdown.Item>Thailand</Dropdown.Item>
                        </DropdownButton>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;