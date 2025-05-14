import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { MdOutlineArrowForward } from "react-icons/md";
import Container from 'react-bootstrap/esm/Container';
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import { Button, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Dealbreaker = () => {
    return (
        <section>
        <section className="all-top-shape all-shape-inner">
            <img src={shape} alt="shape" />
        </section>
        <div className="all-container margin-bottom-step">
        <div className="all-container-inner setting-area position-top-all">
                <Container>
                <div className="all-seting-area">
                <Row className="m-0-responsive">
                    <Col md={12} className="all-title-top mb-1 text-center">
                        <h4 className="mb-1">Your Dealbreakers</h4>
                        <p className="sub-p">What are your dealbreakers?</p>
                    </Col>

                    <Row>
                    <Col md={12}>
                        <div className="about-field-style about-field-area">
                            <Form.Group className="mb-2">
                                <Form.Label>We're not a match if...</Form.Label> 
                                <Form.Control className="input-head" type="text" placeholder="e.g. (you're a gamer.)" />
                                <span className="char-span">100</span>
                            </Form.Group>

                            <Form.Group className="mb-2">
                                <Form.Label>We're not a match if...</Form.Label> 
                                <Form.Control className="input-head" type="text" placeholder="e.g. (you're a gamer.)" />
                                <span className="char-span">100</span>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>We're not a match if...</Form.Label> 
                                <Form.Control className="input-head" type="text" placeholder="e.g. (you're a gamer.)" />
                                <span className="char-span">100</span>
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                </Row>
                  
                    <Row className="m-0-responsive">
                        <Col md={6} className="text-center offset-md-3 btn-modal-round mt-5 pt-4">
                        <NavLink exact to="/about-you">
                            <Button className="full-width btn-all-landing margin-all-modal-btn btn" variant="link">
                            Continue<MdOutlineArrowForward className="arrow-sign" />
                        </Button>
                        </NavLink>
                    </Col>

                    
                    </Row>
                    <Row className="m-0-responsive">
                        <hr className="hr-color mt-3"></hr>

                        <p className="text-center app-p mb-0"><span><img src={downloadApp} alt="downloadApp" /></span>Download our app for:</p>

                       <div className="col-md-12 text-center">
                       <NavLink exact to="bout"><Button className="btn-app-link"> <img src={apps} alt="apps" /></Button></NavLink>
                       <NavLink exact to="bout"><Button className="btn-app-link"> <img src={appg} alt="appg" /></Button></NavLink>
                       </div>
                    </Row>
                    
                    
                    </div>
                </Container>
           
            </div>
            {/* shape-footer-all */}
            <div className="shape-footer-all">
            <img src={bgweball} alt="bgweball" />
            </div>
            {/* shape-footer-all */}
        </div>
       
        </section>
    );
};

export default Dealbreaker;