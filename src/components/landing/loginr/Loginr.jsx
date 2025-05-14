import React from 'react';
import Form from 'react-bootstrap/Form';
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

const Loginr = () => {
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
                            <h4>Login</h4>
                        </Col>
                        <Col md={12}>
                         <p className="p-up-loc text-center mt-1">Please login with your credentials.
                        </p>
                        </Col>
                    </Row>
                    <Form>
                    <Row className="m-0-responsive">
                    <Col md={6}>
                        <Form.Group className="mb-2">
                        <Form.Control className="form-custom" type="text" placeholder="Username" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-2">
                        <Form.Control className="form-custom" type="password" placeholder="Password" />
                    </Form.Group>
                    </Col>

                    <Col md={6} className="text-right">
                        <Form.Group className="mb-3 check-form check-long-all float-right-all margin-right-check login-remember" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                    <p className="login-p link-color float-left-all ms-4">
                        <NavLink exact to="/sign-up">Forgot Password?</NavLink>
                    </p>
                    </Col>
                   

             
                        <Col md={6} className="text-center offset-md-3 btn-modal-round">
                        <NavLink exact to="/headline">
                            <Button className="full-width btn-all-landing margin-all-modal-btn btn mtb-53" variant="link">
                        Login<MdOutlineArrowForward className="arrow-sign" />
                        </Button>
                        </NavLink>
                    </Col>

                    <Col lg={12}>
                        
                        <p className="login-p link-color color-blue-link">
                        <strong>Not a member?  <NavLink exact to="/sign-up">Sign Up here.</NavLink></strong>
                    </p>
                    </Col>
                    </Row>
                    <Row className="m-0-responsive">
                        <hr className="hr-color mt-1"></hr>

                        <p className="text-center app-p mb-0"><span><img src={downloadApp} alt="downloadApp" /></span>Download our app for:</p>

                       <div className="col-md-12 text-center">
                       <NavLink exact to="bout"><Button className="btn-app-link"> <img src={apps} alt="apps" /></Button></NavLink>
                       <NavLink exact to="bout"><Button className="btn-app-link"> <img src={appg} alt="appg" /></Button></NavLink>
                       </div>
                    </Row>
                    
                    </Form>
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

export default Loginr;