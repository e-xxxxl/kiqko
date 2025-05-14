import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';


import './Landing.css';
import logo from '../../assets/images/logo.png';
import craeicon from '../../assets/images/craeicon.png';
import loginicon from '../../assets/images/loginicon.png';
import apple from '../../assets/images/apple.png';
import paly from '../../assets/images/paly.png';
 import Cookie from './Cookie';

const Landing = () => {

    return (
        
        <div>
            <Cookie isOpen={true} /> 
            <section className="landing-area text-center">
                <Container>
                    <Row>
                        <Col className="landing-top-area" lg={12}>
                            <h2> <img src={logo} className="logo-image" alt="bmoveImg" /></h2>
                            <h1 className="logo-title">KIQKO</h1>
                            <h1 className="h1-meet">MEET ASIAN SINGLES</h1>
                            <h3 className="free-ttile">FREE!</h3>
                            <span className="spannto">to</span>
                            <h4 className="header-psot-title">
                                Post | Search |  Chat
                            </h4>
                          
                          
                        
                            
                        </Col>


                    </Row>

                    <Row>
                        <Col lg={6}>

                        <NavLink exact to="/sign-up"><Button className="btn btn-landing-all bg-white-create" variant="light">
                                <span className="create-icon-btn">
                                    <img src={craeicon} className="logo-image" alt="craeicon" />
                                </span>
                                Create Account 
                            </Button>
                            </NavLink>
                        </Col>
                        <Col lg={6}>

                        <NavLink exact to="/login">
                            <Button className="btn btn-landing-all btn-login-accbtn" variant="primary">
                                <span className="create-icon-btn">
                                    <img src={loginicon} className="loginicon-image" alt="loginicon" />
                                </span>
                                Login 
                            </Button>
                            </NavLink>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <span className="grt-app-span">Get the app.</span>
                        </Col>

                        <Col className="link-all-downlaod" lg={12}>
                            <Button variant="link">
                                <NavLink exact to="/"><img src={apple} className="apple.png-image" alt="apple" /></NavLink>
                            </Button>
                            <Button variant="link">
                                <NavLink exact to="/"><img src={paly} className="paly-image" alt="paly" /></NavLink>
                            </Button>
                        </Col>
                    </Row>


                </Container>
            </section>

        </div>
    );
};

export default Landing;