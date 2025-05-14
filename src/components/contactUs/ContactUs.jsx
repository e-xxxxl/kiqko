import React from 'react';
import CommonLayout from '../../layouts/Common';
import shape from '../../assets/images/shape2.png';
import emailVontact from '../../assets/images/emailVontact.png';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { Form } from 'react-bootstrap';
import { Button, Dropdown } from 'react-bootstrap';
import './Contact.css';

const ContactUs = () => {
    return (
        <CommonLayout>
        <section className="all-top-shape">
            <img src={shape} alt="shape" />
            

        </section>
        <div className="all-container">
        <div className="all-container-inner setting-area contact-area">
    
                <Container>
                    <Row>
                    <Col md={12} className="all-title-top mb-4 text-center">
                    <h4 className="mt-5 mb-3">Contact Us</h4>
                    </Col>
                    
                        <Col className="text-center" md={12}>
                            <p className="p-up-loc mb-2">How Can We Help You?</p>
                        </Col>
                        <Col md={6}>
                        <img className="contactm" src={emailVontact} alt="emailVontact" />
                        </Col>
                        <Col className="mt-2" md={5}>
                        <Form.Control className="input-settings" type="text" placeholder="Usename" />
                        <Form.Control className="input-settings" type="text" placeholder="Email address" />
                        <Form.Control className="input-settings" type="text" placeholder="Subject" />
                        <Form.Control className="contact-textarea" as="textarea" placeholder="Your question" rows={3} />
                        <Button className="settings-btn mt-4" variant="primary">Send Message</Button>
                        </Col>

                        
                    </Row>
                   
                </Container>
           
            </div>
        </div>
    </CommonLayout>
    );
};

export default ContactUs;