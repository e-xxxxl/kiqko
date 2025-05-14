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
import verifiedIcon from '../../../assets/images/verifiedIcon.png';
import { Button, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const EmailVerified = () => {
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
                        <h4>Email Verified</h4>
                    </Col>

                    <Col md={12}>
                        <p className="p-up-loc text-center mt-1">Congratulations your email has been verified.
                        </p>
                    </Col>

                    <Col md={12}>
                        <div className="verified-icon mtb-43">
                            <img src={verifiedIcon} alt="verified" />
                        </div>
                    </Col>
                </Row>
                  
                    <Row className="m-0-responsive">
                        <Col md={6} className="text-center offset-md-3 btn-modal-round mt-4 pt-3 mb-4">
                        <NavLink exact to="/loginr">
                            <Button className="full-width btn-all-landing margin-all-modal-btn btn" variant="link">
                            Login<MdOutlineArrowForward className="arrow-sign" />
                        </Button>
                        </NavLink>
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

export default EmailVerified;